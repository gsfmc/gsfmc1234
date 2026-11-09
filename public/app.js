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

const fallbackGuides=[
 {name:"우산",kind:"일반쓰레기·별도배출",summary:"천, 비닐과 금속 살을 가능한 만큼 분리하세요.",steps:[["천·비닐","살대에서 떼기","손을 다치지 않도록 장갑을 끼고 분리해 일반쓰레기로 배출하세요."],["금속 살대","고철로 분리","완전히 분리한 금속은 지역 재활용 배출 기준에 따라 내놓으세요."],["손잡이·몸통","크기 확인","분리가 어렵거나 종량제봉투에 들어가지 않으면 대형폐기물 기준을 확인하세요."]],warning:"부러진 살대 끝은 종이나 테이프로 감싸 주세요."},
 {name:"칫솔",kind:"일반쓰레기",summary:"여러 재질이 단단히 붙어 있어 보통 일반쓰레기로 배출합니다.",steps:[["전체","종량제봉투","물기를 말린 뒤 일반 종량제봉투에 넣으세요."]],warning:"전동칫솔은 배터리를 분리해 폐건전지 수거함에 배출하세요."},
 {name:"보조배터리",kind:"별도배출",summary:"리튬 배터리는 종량제봉투나 재활용품에 넣지 않습니다.",steps:[["전체","폐건전지 수거함","단자를 테이프로 막고 동 행정복지센터·공동주택 등의 폐건전지 수거함에 배출하세요."]],warning:"부풀거나 뜨거운 제품은 누르거나 뚫지 말고 소방서·지자체 안내를 확인하세요."},
 {name:"깨진 화분",kind:"일반쓰레기·별도배출",summary:"재질과 크기에 따라 방법이 달라집니다.",steps:[["흙","이물질 제거","식물과 흙을 완전히 비우세요."],["도자기·유리 조각","안전하게 포장","신문지나 상자에 싸서 깨짐 표시 후 불연성 폐기물 기준을 확인하세요."],["플라스틱 화분","재질 표시 확인","깨끗이 씻고 단일 플라스틱이면 재활용, 오염·혼합 재질이면 일반쓰레기로 배출하세요."]],warning:"깨진 조각은 수거 작업자가 다치지 않도록 단단히 감싸 주세요."},
 {name:"장난감",kind:"일반쓰레기·재활용·별도배출",summary:"건전지, 금속, 플라스틱을 가능한 만큼 나눕니다.",steps:[["건전지·배터리","먼저 분리","폐건전지 수거함에 별도 배출하세요."],["금속 부품","분리 가능하면 고철","나사 등 큰 금속 부품을 분리하세요."],["본체","재질과 크기 확인","복합재질 소형 장난감은 일반쓰레기, 큰 장난감은 대형폐기물 기준을 확인하세요."]],warning:"소리 나는 장난감에는 단추형 전지가 남아 있을 수 있습니다."},
 {name:"프라이팬",kind:"재활용·별도배출",summary:"손잡이와 본체를 분리할 수 있으면 재질별로 나눕니다.",steps:[["음식물·기름","깨끗이 제거","키친타월로 닦고 세척해 말리세요."],["손잡이","분리","나사로 분리되는 플라스틱·나무 손잡이는 일반쓰레기로 배출하세요."],["금속 본체","고철","공동주택 고철 수거함 또는 지역 재활용 기준에 따라 배출하세요."]],warning:"코팅이 벗겨져도 금속 본체는 고철로 분류할 수 있으나 지역 기준을 확인하세요."},
 {name:"텀블러",kind:"재활용·일반쓰레기",summary:"뚜껑, 고무 패킹과 금속 몸통을 분리하세요.",steps:[["뚜껑·패킹","분리","실리콘 패킹과 복합재질 뚜껑은 일반쓰레기로 배출하세요."],["몸통","비우고 세척","금속 단일 재질이면 고철류로 배출하세요."]],warning:"진공 단열 텀블러는 구멍을 뚫지 마세요."},
 {name:"전선",kind:"재활용·별도배출",summary:"소형 폐가전 수거함이나 전선류 수거 기준을 이용하세요.",steps:[["플러그·어댑터","함께 모으기","잘라내지 말고 소형 폐가전 수거함에 배출하세요."],["전선","묶어서 배출","지역에서 전선류를 받는 재활용 거점에 배출하세요."]],warning:"피복을 태우거나 벗기지 마세요."},
 {name:"스프레이통",kind:"재활용",summary:"내용물을 완전히 사용한 뒤 환기가 잘 되는 곳에서 배출 준비를 합니다.",steps:[["내용물","끝까지 사용","불꽃이 없는 환기 장소에서 남은 내용물을 완전히 빼세요."],["용기","지역 기준 확인","구멍을 요구하지 않는 지역도 있으므로 광산구 최신 기준을 확인한 뒤 캔류로 배출하세요."]],warning:"불 근처에서 가스를 빼거나 임의로 찌르지 마세요."},
 {name:"배달용기",kind:"재활용·일반쓰레기",summary:"내용물과 기름기를 제거하고 용기·뚜껑·필름을 나눕니다.",steps:[["남은 음식","비우기","음식물 분류 기준에 따라 따로 배출하세요."],["용기·뚜껑","씻고 말리기","재질 표시가 있고 깨끗하면 같은 재질끼리 배출하세요."],["필름·오염된 부분","분리","씻기 어려운 양념·기름 오염 용기는 일반쓰레기로 배출하세요."]],warning:"검은색·복합재질 용기는 선별이 어려울 수 있어 지역 기준을 확인하세요."}
];

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
function renderManual(item){
  $("result-panel").classList.remove("readable-result");
  $("result-panel").innerHTML='<div class="result-hero"><div><p class="result-kicker">직접 선택한 품목</p><h3>'+esc(item.name)+'</h3><p class="result-summary">'+esc(item.summary)+'</p></div><div class="badges"><span class="badge">배출 구분 · '+esc(item.kind)+'</span></div></div><div class="result-section"><h4>이렇게 나눠서 배출하세요</h4><div class="guide-steps">'+item.steps.map((s,i)=>'<article class="guide-step"><small>'+String(i+1).padStart(2,"0")+' · '+esc(s[0])+'</small><strong>'+esc(s[1])+'</strong><p>'+esc(s[2])+'</p></article>').join("")+'</div></div><div class="notice"><strong>주의사항</strong> · '+esc(item.warning)+'</div>';
  $("result-panel").hidden=false;
  $("result-panel").scrollIntoView({behavior:"smooth",block:"nearest"});
}
$("popular-list").innerHTML=fallbackGuides.map((g,i)=>'<button class="chip" type="button" data-guide="'+i+'">'+esc(g.name)+'</button>').join("");
$("popular-list").addEventListener("click",e=>{const b=e.target.closest("[data-guide]");if(b)renderManual(fallbackGuides[Number(b.dataset.guide)])});
$("item-search").addEventListener("input",e=>{
  const q=e.target.value.trim(); const box=$("search-results");
  if(!q){box.innerHTML="";return}
  const found=fallbackGuides.map((g,i)=>({g,i})).filter(x=>x.g.name.includes(q)).slice(0,5);
  box.innerHTML=found.length?found.map(x=>'<button class="search-result" type="button" data-guide="'+x.i+'">'+esc(x.g.name)+'</button>').join(""):'<p class="privacy-note">일치하는 품목이 없어요. 사진으로 분석해 보세요.</p>';
});
$("search-results").addEventListener("click",e=>{const b=e.target.closest("[data-guide]");if(b)renderManual(fallbackGuides[Number(b.dataset.guide)])});

let photoToken=0,currentPhotoDataUrl=null;
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
  $("analyze-photo").disabled=true;$("photo-description").disabled=true;
  setStatus(description?"AI가 사진과 설명을 함께 살펴보고 있어요…":"AI가 사진 속 물건과 재질을 살펴보고 있어요…",false,true);
  $("result-panel").hidden=true;
  try{
    const res=await fetch("/api/analyze",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({image:dataUrl,description})});
    const data=await res.json().catch(()=>({}));
    if(token!==photoToken)return;
    if(!res.ok)throw new Error(data.message||"분석에 실패했습니다.");
    renderAnalysis(data);
    setStatus("분석이 끝났어요. 사진과 실제 물건을 함께 확인해 주세요.");
  }catch(err){
    if(token!==photoToken)return;
    setStatus(err.message==="AI_SETUP_REQUIRED"?"AI 분석 연결을 준비 중입니다. 잠시 후 다시 시도해 주세요.":(err.message||"사진을 분석하지 못했어요. 잠시 후 다시 시도해 주세요."),true);
  }finally{if(token===photoToken){$("analyze-photo").disabled=!currentPhotoDataUrl;$("photo-description").disabled=false}}
}
$("analyze-photo").addEventListener("click",()=>{if(currentPhotoDataUrl)analyzePhoto(currentPhotoDataUrl,++photoToken,$("photo-description").value.trim())});
function renderAnalysis(a){
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
  '<footer class="analysis-reference"><p class="analysis-confidence">사진 판단 신뢰도 · '+({high:"높음",medium:"보통",low:"낮음"}[confidence]||"보통")+'</p><strong>분석 결과는 참고용으로 활용해 주세요</strong><p>AI 분석 결과는 실제 물품의 재질·상태와 다를 수 있으며, 배출 기준은 추후 변경될 수 있습니다. 배출 전 광산구·공단의 최신 안내를 확인해 주세요.</p></footer></div>';
  $("result-panel").hidden=false;$("result-panel").scrollIntoView({behavior:"smooth",block:"start"});
}
["camera-input","upload-input"].forEach(id=>$(id).addEventListener("change",e=>setPhoto(e.target.files&&e.target.files[0])));
$("remove-photo").addEventListener("click",()=>{photoToken++;currentPhotoDataUrl=null;$("analyze-photo").disabled=true;$("photo-description").disabled=false;$("preview-img").removeAttribute("src");$("preview-wrap").hidden=true;$("upload-empty").hidden=false;$("result-panel").hidden=true;setStatus("");$("camera-input").value="";$("upload-input").value=""});
const drop=$("drop-zone");
["dragenter","dragover"].forEach(n=>drop.addEventListener(n,e=>{e.preventDefault();drop.classList.add("drag")}));
["dragleave","drop"].forEach(n=>drop.addEventListener(n,e=>{e.preventDefault();drop.classList.remove("drag")}));
drop.addEventListener("drop",e=>setPhoto(e.dataTransfer.files&&e.dataTransfer.files[0]));

