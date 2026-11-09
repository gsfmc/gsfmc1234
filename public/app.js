const $=id=>document.getElementById(id);
const views=["home","photo","schedule","stores"];
function openView(id,push=true){
  if(!views.includes(id))id="home";
  document.querySelectorAll(".view").forEach(v=>v.hidden=v.id!==id);
  document.querySelectorAll("[data-open]").forEach(b=>b.classList.toggle("active",b.dataset.open===id&&b.closest(".bottom-nav")));
  window.dispatchEvent(new CustomEvent("app:viewchange",{detail:id}));
  if(push&&location.hash!=="#"+id)history.pushState({id},"","#"+id);
}
document.querySelectorAll("[data-open]").forEach(b=>b.addEventListener("click",e=>{e.preventDefault();openView(b.dataset.open)}));
addEventListener("popstate",()=>openView(location.hash.slice(1)||"home",false));
openView(location.hash.slice(1)||"home",false);

function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]))}
function disposalText(value){
  const text=String(value??"");
  const route=/(?:종량제\s*봉투(?:\s*[(（][^)）]*[)）])?|일반\s*쓰레기|재활용(?:품)?|음식물(?:\s*쓰레기)?|종이(?:류)?|유리(?:병|류)?|캔류?|고철(?:류)?|플라스틱(?:류)?|비닐(?:류)?|불연성\s*(?:폐기물|봉투)|폐건전지\s*수거함|수거함)[^.!?。\n,，]*?(?:배출|버리|넣어|내놓)[^.!?。\n,，]*/gu;
  let html="",cursor=0;
  for(const match of text.matchAll(route)){
    html+=esc(text.slice(cursor,match.index))+'<strong class="disposal-key">'+esc(match[0])+'</strong>';cursor=match.index+match[0].length;
  }
  return html+esc(text.slice(cursor));
}
let photoToken=0,currentPhotoDataUrl=null,followUpSession=null;
function resetFollowUp(){
  if(followUpSession){followUpSession.controller?.abort();clearTimeout(followUpSession.timer)}
  followUpSession=null;
}
async function resizeImage(file){
  const bitmap=await createImageBitmap(file);
  const max=1280, scale=Math.min(1,max/Math.max(bitmap.width,bitmap.height));
  const canvas=document.createElement("canvas"); canvas.width=Math.round(bitmap.width*scale);canvas.height=Math.round(bitmap.height*scale);
  canvas.getContext("2d",{alpha:false}).drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close();
  return canvas.toDataURL("image/jpeg",.82);
}
async function setPhoto(file){
  if(!file||!file.type.startsWith("image/")){setStatus("이미지 파일을 선택해 주세요.",true);return}
  if(file.size>15*1024*1024){setStatus("사진 용량이 너무 커요. 15MB 이하 사진을 선택해 주세요.",true);return}
  resetFollowUp();
  const token=++photoToken;
  $("analyze-photo").disabled=true;$("photo-description").disabled=false;$("result-panel").hidden=true;
  try{
    setStatus("사진을 준비하고 있어요…");
    const dataUrl=await resizeImage(file); if(token!==photoToken)return;
    currentPhotoDataUrl=dataUrl;
    $("preview-img").src=dataUrl;$("preview-wrap").hidden=false;$("upload-empty").hidden=true;
    $("analyze-photo").disabled=false;
    setStatus("사진이 준비됐어요. 설명을 추가한 뒤 분석하기를 눌러 주세요.");
  }catch(err){if(token!==photoToken)return;$("analyze-photo").disabled=!currentPhotoDataUrl;setStatus("사진을 읽지 못했어요. 다른 사진으로 다시 시도해 주세요.",true)}
}
function setStatus(text,error=false,busy=false){const el=$("ai-status");el.textContent=text;el.className="status"+(error?" error":"")+(busy?" busy":"")}
async function analyzePhoto(dataUrl,token,description){
  resetFollowUp();
  $("analyze-photo").disabled=true;$("photo-description").disabled=true;
  setStatus(description?"AI가 사진과 설명을 함께 살펴보고 있어요…":"AI가 사진 속 물건과 재질을 살펴보고 있어요…",false,true);
  $("result-panel").hidden=true;
  try{
    const res=await fetch("/api/analyze",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({image:dataUrl,description})});
    const data=await res.json().catch(()=>({}));
    if(token!==photoToken)return;
    if(!res.ok)throw new Error(data.message||"분석에 실패했습니다.");
    renderAnalysis(data,{image:dataUrl,description});
    setStatus("분석이 끝났어요. 사진과 실제 물건을 함께 확인해 주세요.");
  }catch(err){
    if(token!==photoToken)return;
    setStatus(err.message==="AI_SETUP_REQUIRED"?"AI 분석 연결을 준비 중입니다. 잠시 후 다시 시도해 주세요.":(err.message||"사진을 분석하지 못했어요. 잠시 후 다시 시도해 주세요."),true);
  }finally{if(token===photoToken){$("analyze-photo").disabled=!currentPhotoDataUrl;$("photo-description").disabled=false}}
}
$("analyze-photo").addEventListener("click",()=>{if(currentPhotoDataUrl)analyzePhoto(currentPhotoDataUrl,++photoToken,$("photo-description").value.trim())});
function renderAnalysis(a,photoContext){
  resetFollowUp();
  const confidence=a.confidence||"medium";
  const itemName=String(a.itemName||"품목 확인이 필요한 물건"),nameParts=itemName.match(/^(.+?)\s*[(（](.+)[)）]\s*$/);
  const title=esc(nameParts?nameParts[1].trim():itemName),nameDetail=nameParts?'<p class="analysis-item-detail">'+esc(nameParts[2])+'</p>':"";
  const components=(a.components||[]).map(x=>'<div><dt>'+esc(x.part)+'</dt><dd>'+esc(x.material)+'</dd></div>').join("");
  const steps=(a.steps||[]).map((x,i)=>'<li class="analysis-step"><span class="analysis-step-number" aria-hidden="true">'+(i+1)+'</span><div><p class="analysis-step-part">'+esc(x.part)+'</p><h5>'+esc(x.action)+'</h5><p class="analysis-step-detail">'+disposalText(x.detail)+'</p></div></li>').join("");
  const prep=(a.preparation||[]).map(x=>"<li>"+disposalText(x)+"</li>").join("");
  const questions=(a.questions||[]).map(x=>"<li>"+esc(x)+"</li>").join("");
  const alternatives=(a.alternatives||[]).map(x=>esc(x)).join(" · ");
  $("result-panel").classList.add("readable-result");
  $("result-panel").innerHTML='<div class="analysis-result"><header class="analysis-header"><p class="analysis-kicker">AI 사진 분석 결과</p><h3 tabindex="-1">'+title+'</h3>'+nameDetail+'<div class="analysis-category"><span>배출 구분</span><strong>'+esc(a.category||"판단보류")+'</strong></div>'+
  (confidence==="low"?'<p class="analysis-uncertain">사진만으로는 정확한 품목을 구분하기 어려워요. 아래 확인 사항을 먼저 살펴봐 주세요.</p>':"")+
  (a.summary?'<p class="analysis-summary">'+disposalText(a.summary)+'</p>':"")+'</header>'+
  (questions||alternatives?'<section class="analysis-clarify"><h4>먼저 확인해 주세요</h4>'+(alternatives?'<p><strong>비슷하게 보이는 품목</strong><br>'+alternatives+'</p>':"")+(questions?'<ul>'+questions+'</ul>':"")+'</section>':"")+
  (steps?'<section class="analysis-block"><h4>이렇게 나눠서 배출하세요</h4><ol class="analysis-steps">'+steps+'</ol></section>':"")+
  (prep?'<section class="analysis-block analysis-preparation"><h4>배출 전 준비</h4><ul>'+prep+'</ul></section>':"")+
  ((a.warnings||[]).length?'<aside class="analysis-warning"><h4><span aria-hidden="true">!</span> 꼭 주의해 주세요</h4><ul>'+(a.warnings||[]).map(x=>"<li>"+disposalText(x)+"</li>").join("")+'</ul></aside>':"")+
  (components?'<details class="analysis-materials"><summary>부품별 재질 보기 <span>'+a.components.length+'개</span></summary><dl>'+components+'</dl></details>':"")+
  '<footer class="analysis-reference"><p class="analysis-confidence">사진 판단 신뢰도 · '+({high:"높음",medium:"보통",low:"낮음"}[confidence]||"보통")+'</p><strong>분석 결과는 참고용으로 활용해 주세요</strong><p>AI 분석 결과는 실제 물품의 재질·상태와 다를 수 있으며, 배출 기준은 추후 변경될 수 있습니다. 배출 전 광산구·공단의 최신 안내를 확인해 주세요.</p></footer>'+
  '<section class="analysis-followup" aria-labelledby="followup-heading"><h4 id="followup-heading">더 궁금한 점이 있나요?</h4><p class="followup-intro">지금 사진과 분석 내용을 참고해 답해요. 추천 질문을 누르거나 직접 물어보세요.</p><div id="followup-messages" class="followup-messages" role="log" aria-live="polite" aria-relevant="additions"></div><div id="followup-suggestions" class="followup-suggestions" aria-label="추천 질문"></div><form id="followup-form"><label for="followup-question">직접 질문하기</label><textarea id="followup-question" rows="2" maxlength="500" placeholder="예: 손잡이가 분리되지 않으면 어떻게 버려야 하나요?" aria-describedby="followup-status"></textarea><div class="followup-form-bottom"><span>500자 이내</span><button id="followup-submit" class="btn primary" type="submit">질문하기 <span aria-hidden="true">↑</span></button></div><p id="followup-status" class="status" role="status" aria-live="polite"></p></form></section></div>';
  initializeFollowUp(a,photoContext||{image:currentPhotoDataUrl,description:$("photo-description").value.trim()});
  $("result-panel").hidden=false;$("result-panel").scrollIntoView({behavior:"smooth",block:"start"});
}
function followUpQuestions(analysis,proposed,asked=[]){
  const item=String(analysis.itemName||"이 물건").split(/[(（]/)[0].trim().slice(0,35)||"이 물건";
  const part=String(analysis.components?.[0]?.part||"부품").slice(0,35);
  const defaults=[part+" 부분을 분리하기 어려우면 어떻게 하나요?",item+"에 오염이 남아 있어도 배출할 수 있나요?",item+"을 버릴 때 특히 주의할 점이 있나요?","재질 표시가 없으면 무엇을 확인해야 하나요?","종량제봉투에 들어가지 않는 크기면 어떻게 하나요?","깨지거나 날카로운 부분은 어떻게 포장하나요?","배출 방법을 한 문장으로 다시 정리해 주세요.","정확한 배출 기준은 어디에 문의하면 되나요?"];
  const result=[],seen=new Set(asked.map(q=>q.replace(/\s/g,"")));
  for(const q of [...(Array.isArray(proposed)?proposed:[]),...defaults]){
    if(typeof q!=="string"||!q.trim()||q.length>120)continue;
    const value=q.trim(),key=value.replace(/\s/g,"");if(seen.has(key))continue;seen.add(key);result.push(value);if(result.length===3)break;
  }
  return result;
}
function initializeFollowUp(analysis,context){
  const session={analysis:JSON.parse(JSON.stringify(analysis)),image:context.image,description:context.description||"",history:[],asked:[],busy:false,controller:null,timer:null};
  followUpSession=session;
  const suggestions=$("followup-suggestions"),input=$("followup-question"),submit=$("followup-submit"),status=$("followup-status"),messages=$("followup-messages");
  function renderSuggestions(proposed){
    session.suggestions=followUpQuestions(session.analysis,proposed,session.asked);
    suggestions.innerHTML=session.suggestions.map((q,i)=>'<button class="followup-suggestion" type="button" data-followup="'+i+'"><span aria-hidden="true">Q</span><span>'+esc(q)+'</span><b aria-hidden="true">↗</b></button>').join("");
  }
  function setBusy(value){
    session.busy=value;input.disabled=value;submit.disabled=value;messages.setAttribute("aria-busy",String(value));
    submit.innerHTML=value?'답변 중…':'질문하기 <span aria-hidden="true">↑</span>';
    suggestions.querySelectorAll("button").forEach(button=>button.disabled=value);
  }
  async function ask(question){
    if(followUpSession!==session||session.busy)return;
    question=question.trim();
    if(!question||question.length>500){status.className="status error";status.textContent="질문은 1~500자로 입력해 주세요.";input.focus();return}
    if(!session.image){status.className="status error";status.textContent="먼저 사진을 분석한 뒤 질문해 주세요.";return}
    input.value=question;setBusy(true);status.className="status busy";status.textContent="사진과 앞선 내용을 참고해 답변하고 있어요…";
    const userMessage=document.createElement("article");userMessage.className="followup-message from-user";userMessage.innerHTML='<span class="followup-message-label">내 질문</span><p>'+esc(question)+'</p>';messages.append(userMessage);
    session.controller=new AbortController();session.timer=setTimeout(()=>session.controller.abort(),55000);
    try{
      const response=await fetch("/api/follow-up",{method:"POST",headers:{"content-type":"application/json"},signal:session.controller.signal,body:JSON.stringify({image:session.image,description:session.description,analysis:session.analysis,history:session.history.slice(-10),question})});
      const data=await response.json().catch(()=>({}));
      if(followUpSession!==session)return;
      if(!response.ok)throw Error(data.message==="AI_SETUP_REQUIRED"?"AI 답변 연결을 준비 중이에요. 잠시 후 다시 질문해 주세요.":data.message||"답변을 받지 못했어요. 다시 질문해 주세요.");
      if(typeof data.answer!=="string"||!data.answer.trim())throw Error("답변을 읽지 못했어요. 다시 질문해 주세요.");
      const answer=data.answer.trim(),reply=document.createElement("article");reply.className="followup-message from-ai";reply.innerHTML='<span class="followup-message-label">AI 답변</span><p>'+disposalText(answer)+'</p>';messages.append(reply);
      session.history.push({role:"user",content:question},{role:"assistant",content:answer});session.asked.push(question);
      input.value="";renderSuggestions(data.suggestedQuestions);status.className="status";status.textContent="이어서 궁금한 점을 물어보세요.";
      reply.scrollIntoView({behavior:"smooth",block:"nearest"});
    }catch(error){
      if(followUpSession!==session)return;
      userMessage.remove();input.value=question;status.className="status error";status.textContent=error.name==="AbortError"?"답변이 지연되고 있어요. 질문을 다시 보내 주세요.":error.message;
    }finally{
      clearTimeout(session.timer);
      if(followUpSession===session){session.controller=null;setBusy(false)}
    }
  }
  suggestions.addEventListener("click",event=>{const button=event.target.closest("[data-followup]");if(button)ask(session.suggestions[Number(button.dataset.followup)])});
  $("followup-form").addEventListener("submit",event=>{event.preventDefault();ask(input.value)});
  input.addEventListener("keydown",event=>{if(event.key==="Enter"&&(event.ctrlKey||event.metaKey)&&!event.isComposing){event.preventDefault();ask(input.value)}});
  renderSuggestions(analysis.suggestedQuestions);
  if(!session.image){input.disabled=true;submit.disabled=true;suggestions.querySelectorAll("button").forEach(button=>button.disabled=true);status.textContent="사진을 분석하면 이어서 질문할 수 있어요."}
}
["camera-input","upload-input"].forEach(id=>$(id).addEventListener("change",e=>setPhoto(e.target.files&&e.target.files[0])));
$("remove-photo").addEventListener("click",()=>{resetFollowUp();photoToken++;currentPhotoDataUrl=null;$("analyze-photo").disabled=true;$("photo-description").disabled=false;$("preview-img").removeAttribute("src");$("preview-wrap").hidden=true;$("upload-empty").hidden=false;$("result-panel").hidden=true;setStatus("");$("camera-input").value="";$("upload-input").value=""});
const drop=$("drop-zone");
["dragenter","dragover"].forEach(n=>drop.addEventListener(n,e=>{e.preventDefault();drop.classList.add("drag")}));
["dragleave","drop"].forEach(n=>drop.addEventListener(n,e=>{e.preventDefault();drop.classList.remove("drag")}));
drop.addEventListener("drop",e=>setPhoto(e.dataTransfer.files&&e.dataTransfer.files[0]));

