const $=id=>document.getElementById(id);
const views=["home","photo","schedule","stores"];
function openView(id,push=true){
  if(!views.includes(id))id="home";
  document.querySelectorAll(".view").forEach(v=>v.hidden=v.id!==id);
  document.querySelectorAll("[data-open]").forEach(b=>b.classList.toggle("active",b.dataset.open===id&&b.closest(".bottom-nav")));
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
function renderManual(item){
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

let photoToken=0;
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
  try{
    setStatus("사진을 준비하고 있어요…");
    const dataUrl=await resizeImage(file); if(token!==photoToken)return;
    $("preview-img").src=dataUrl;$("preview-wrap").hidden=false;$("upload-empty").hidden=true;
    await analyzePhoto(dataUrl,token);
  }catch(err){setStatus("사진을 읽지 못했어요. 다른 사진으로 다시 시도해 주세요.",true)}
}
function setStatus(text,error=false,busy=false){const el=$("ai-status");el.textContent=text;el.className="status"+(error?" error":"")+(busy?" busy":"")}
async function analyzePhoto(dataUrl,token){
  setStatus("AI가 물건과 재질, 분리할 부분을 살펴보고 있어요…",false,true);
  $("result-panel").hidden=true;
  try{
    const res=await fetch("/api/analyze",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({image:dataUrl})});
    const data=await res.json().catch(()=>({}));
    if(token!==photoToken)return;
    if(!res.ok)throw new Error(data.message||"분석에 실패했습니다.");
    renderAnalysis(data);
    setStatus("분석이 끝났어요. 사진과 실제 물건을 함께 확인해 주세요.");
  }catch(err){
    setStatus(err.message==="AI_SETUP_REQUIRED"?"AI 분석 연결을 준비 중입니다. 잠시 후 다시 시도해 주세요.":(err.message||"사진을 분석하지 못했어요. 잠시 후 다시 시도해 주세요."),true);
  }
}
function renderAnalysis(a){
  const confidence=a.confidence||"medium";
  const title=confidence==="low"?"사진 속 물건을 확실히 구분하기 어려워요":"사진 속 물건은 ‘"+esc(a.itemName||"알 수 없는 물건")+"’으로 보여요.";
  const components=(a.components||[]).map(x=>'<span class="component"><strong>'+esc(x.part)+'</strong> · '+esc(x.material)+'</span>').join("");
  const steps=(a.steps||[]).map((x,i)=>'<article class="guide-step"><small>'+String(i+1).padStart(2,"0")+' · '+esc(x.part)+'</small><strong>'+esc(x.action)+'</strong><p>'+esc(x.detail)+'</p></article>').join("");
  const prep=(a.preparation||[]).map(x=>"<li>"+esc(x)+"</li>").join("");
  const questions=(a.questions||[]).map(x=>"<li>"+esc(x)+"</li>").join("");
  const alternatives=(a.alternatives||[]).map(x=>esc(x)).join(" · ");
  $("result-panel").innerHTML='<div class="result-hero"><div><p class="result-kicker">AI 사진 분석 결과</p><h3>'+title+'</h3><p class="result-summary">'+esc(a.summary||"")+'</p></div><div class="badges"><span class="badge">배출 구분 · '+esc(a.category||"판단보류")+'</span><span class="badge '+(confidence==="low"?"low":"")+'">판단 신뢰도 · '+({high:"높음",medium:"보통",low:"낮음"}[confidence]||"보통")+'</span></div></div>'+
  (components?'<div class="result-section"><h4>보이는 부분과 재질</h4><div class="component-list">'+components+'</div></div>':"")+
  (steps?'<div class="result-section"><h4>이 부분은 분리해서 배출하세요</h4><div class="guide-steps">'+steps+'</div></div>':"")+
  (prep?'<div class="result-section"><h4>배출 전 처리방법</h4><div class="notice"><ol>'+prep+'</ol></div></div>':"")+
  ((a.warnings||[]).length?'<div class="notice"><strong>주의사항</strong><ul>'+(a.warnings||[]).map(x=>"<li>"+esc(x)+"</li>").join("")+'</ul></div>':"")+
  (questions||alternatives?'<div class="clarify"><strong>조금 더 확인해 주세요</strong>'+(alternatives?'<p>비슷하게 보이는 품목: '+alternatives+'</p>':"")+(questions?'<ul>'+questions+'</ul>':"")+'</div>':"");
  $("result-panel").hidden=false;$("result-panel").scrollIntoView({behavior:"smooth",block:"nearest"});
}
["camera-input","upload-input"].forEach(id=>$(id).addEventListener("change",e=>setPhoto(e.target.files&&e.target.files[0])));
$("remove-photo").addEventListener("click",()=>{photoToken++;$("preview-img").removeAttribute("src");$("preview-wrap").hidden=true;$("upload-empty").hidden=false;$("result-panel").hidden=true;setStatus("");$("camera-input").value="";$("upload-input").value=""});
const drop=$("drop-zone");
["dragenter","dragover"].forEach(n=>drop.addEventListener(n,e=>{e.preventDefault();drop.classList.add("drag")}));
["dragleave","drop"].forEach(n=>drop.addEventListener(n,e=>{e.preventDefault();drop.classList.remove("drag")}));
drop.addEventListener("drop",e=>setPhoto(e.dataTransfer.files&&e.dataTransfer.files[0]));

let stores=[],userPoint=null,selectedStore=null;
function distance(a,b){const r=x=>x*Math.PI/180,dLat=r(b.lat-a.lat),dLon=r(b.lon-a.lon);const h=Math.sin(dLat/2)**2+Math.cos(r(a.lat))*Math.cos(r(b.lat))*Math.sin(dLon/2)**2;return 6371*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h))}
function distanceLabel(km){return km<1?Math.round(km*1000)+"m":km.toFixed(1)+"km"}
async function loadStores(){
  try{
    const res=await fetch("/api/stores");const data=await res.json();if(!res.ok)throw new Error();
    stores=data.items||[];
    $("store-source").innerHTML='출처: <a href="'+esc(data.sourceUrl)+'" target="_blank" rel="noopener">공공데이터포털 전국종량제봉투판매소표준데이터</a> · 기준일 '+esc(data.referenceDate||"확인 필요")+' · 영업 중 '+stores.length+'곳';
    $("location-status").textContent=stores.length?"판매소를 선택하거나 현재 위치 기준으로 가까운 곳을 찾아보세요.":"광산구 영업 중 판매소가 확인되지 않았어요.";
    renderStores();
  }catch{$("store-list").innerHTML='<div class="empty-panel"><strong>판매소 자료를 불러오지 못했어요</strong><p>잠시 후 다시 시도해 주세요.</p></div>';$("location-status").textContent="공공데이터 연결을 확인하지 못했어요."}
}
function renderStores(){
  const list=stores.map((s,i)=>({...s,index:i,km:userPoint&&s.lat&&s.lon?distance(userPoint,{lat:s.lat,lon:s.lon}):null})).sort((a,b)=>userPoint?(a.km??1e9)-(b.km??1e9):a.name.localeCompare(b.name,"ko"));
  $("store-list").innerHTML=list.map(s=>'<button class="store-item '+(selectedStore===s.index?"active":"")+'" type="button" data-store="'+s.index+'"><span><strong>'+esc(s.name)+'</strong><span>'+esc(s.address)+'</span><span>대형폐기물 스티커 · '+esc(s.sticker||"정보 없음")+(s.phone?" · "+esc(s.phone):"")+'</span></span><em>'+(s.km==null?"지도 보기":distanceLabel(s.km))+'</em></button>').join("");
}
$("store-list").addEventListener("click",e=>{const b=e.target.closest("[data-store]");if(!b)return;selectStore(Number(b.dataset.store))});
function selectStore(i){const s=stores[i];if(!s)return;selectedStore=i;$("map-store-name").textContent=s.name;$("map-address").textContent=s.address;$("store-map").src="https://www.google.com/maps?q="+encodeURIComponent(s.address)+"&output=embed";$("map-placeholder").hidden=true;$("map-directions").href="https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(s.address);$("map-directions").hidden=false;renderStores()}
$("use-location").addEventListener("click",()=>{if(!navigator.geolocation){$("location-status").textContent="이 기기에서는 위치를 사용할 수 없어요.";return}$("location-status").textContent="현재 위치를 확인하고 있어요…";navigator.geolocation.getCurrentPosition(p=>{userPoint={lat:p.coords.latitude,lon:p.coords.longitude};$("location-status").textContent="현재 위치 기준 가까운 순입니다. 거리는 직선거리예요.";renderStores()},()=>{$("location-status").textContent="위치 권한을 사용할 수 없어요. 주소로 찾아보세요."},{timeout:10000,maximumAge:300000})});
async function geocodeAddress(){
  const q=$("address-input").value.trim();if(!q){$("location-status").textContent="광산구 주소나 동 이름을 입력해 주세요.";return}
  $("location-status").textContent="주소 위치를 찾고 있어요…";
  try{const res=await fetch("https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=kr&accept-language=ko&q="+encodeURIComponent("광주광역시 광산구 "+q));const data=await res.json();if(!data.length)throw new Error();userPoint={lat:Number(data[0].lat),lon:Number(data[0].lon)};$("location-status").textContent="입력한 주소 기준 가까운 순입니다. 거리는 직선거리예요.";renderStores()}catch{$("location-status").textContent="주소를 찾지 못했어요. 도로명주소로 다시 입력해 주세요."}
}
$("search-address").addEventListener("click",geocodeAddress);$("address-input").addEventListener("keydown",e=>{if(e.key==="Enter")geocodeAddress()});
loadStores();