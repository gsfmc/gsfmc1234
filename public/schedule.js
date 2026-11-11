import {pointInGeometry} from "./geo.js";
export {pointInGeometry} from "./geo.js";
// Regular collection weekdays checked against GSFMC's guide on 2026-11-03.
export const SCHEDULE_GROUPS=[
  {days:[1,3,5],areas:["송정1동","송정2동","도산동","우산동","월곡1동","비아동","하남동","첨단1동","첨단2동"]},
  {days:[2,4,6],areas:["신흥동","어룡동","월곡2동","신가동","운남동","신창동","수완동"]},
  {days:[1,4],areas:["평동","삼도동","평동산단1단지","평동산단2단지","빛그린산단"]},
  {days:[2,5],areas:["본량동","동곡동","임곡동","진곡산단","평동산단3단지"]},
  {days:[3,6],areas:["하남산단"]}
];
export const SCHEDULE_AREAS=SCHEDULE_GROUPS.flatMap(g=>g.areas.map(name=>({name,days:g.days,industrial:name.includes("산단")})));
const WEEKDAYS=["일","월","화","수","목","금","토"];
function koreaDate(now){
  const parts=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(now).filter(p=>p.type!=="literal").map(p=>[p.type,Number(p.value)]));
  return new Date(Date.UTC(parts.year,parts.month-1,parts.day));
}
export function regularCollection(days,now=new Date()){
  const today=koreaDate(now),weekday=today.getUTCDay();
  let offset=0;while(offset<7&&!days.includes((weekday+offset)%7))offset++;
  const next=new Date(today);next.setUTCDate(next.getUTCDate()+offset);
  return {today:offset===0,offset,label:offset===0?"오늘 정기 수거일":offset===1?"내일 정기 수거일":WEEKDAYS[next.getUTCDay()]+"요일 정기 수거",date:next.getUTCMonth()+1+"월 "+next.getUTCDate()+"일",weekday:WEEKDAYS[weekday],todayDate:today.getUTCMonth()+1+"월 "+today.getUTCDate()+"일"};
}
export function locateDong(point,accuracy,features){
  const find=p=>features.find(f=>pointInGeometry(p,f.geometry));
  const center=find(point);if(!center)return null;
  const dy=accuracy/111320,dx=dy/Math.cos(point[1]*Math.PI/180);
  const nearby=[[point[0]+dx,point[1]],[point[0]-dx,point[1]],[point[0],point[1]+dy],[point[0],point[1]-dy]];
  return {name:center.properties.adm_nm.trim().split(/\s+/).at(-1),boundaryNearby:nearby.some(p=>find(p)!==center)};
}

function initializeSchedule(){
  const el=id=>document.getElementById(id),select=el("schedule-area"),status=el("schedule-location-status"),button=el("schedule-locate");
  const flow=window.WasteFlow;
  let locationRequest=0;
  for(const industrial of [false,true]){
    const group=document.createElement("optgroup");group.label=industrial?"산업단지":"행정동";
    SCHEDULE_AREAS.filter(a=>a.industrial===industrial).sort((a,b)=>a.name.localeCompare(b.name,"ko")).forEach(area=>{const option=document.createElement("option");option.value=option.textContent=area.name;group.append(option)});select.append(group);
  }
  const weekdays=days=>days.map(d=>WEEKDAYS[d]).join("·")+"요일";
  function render(){
    const area=SCHEDULE_AREAS.find(a=>a.name===select.value),today=regularCollection([1,2,3,4,5,6]);
    const analysis=flow.analysis,relevant=analysis?.collection;
    el("schedule-heading").textContent=area?area.name+" 정기 수거 일정":"광산구 기본 수거 안내";
    el("schedule-date").textContent=today.todayDate+" ("+today.weekday+") · 한국 시간";
    const cards=[
      {name:"생활쓰레기",icon:"▣",days:[1,2,3,4,5,6],week:"월~토요일",detail:"종량제봉투로 배출해 주세요."},
      {name:"음식물쓰레기",icon:"♧",days:[1,2,3,4,5,6],week:"월~토요일",detail:"음식물 전용 배출 방법을 따라 주세요."},
      {name:"재활용품",icon:"↻",days:area?.days,week:area?weekdays(area.days):"지역을 선택해 주세요",detail:"배출 장소·시간은 해당 지역 또는 단지 안내도 확인해 주세요."}
    ].map(card=>({...card,info:card.days?regularCollection(card.days):null})).sort((a,b)=>Number(b.name===relevant)-Number(a.name===relevant)||(a.info?.offset??9)-(b.info?.offset??9));
    const bagLink='<button type="button" id="schedule-store-next" class="schedule-store-link" data-flow="stores"><span>배출할 봉투도 필요하신가요?</span><strong>가까운 봉투 판매소 →</strong></button>';
    el("schedule-cards").innerHTML=cards.map(card=>'<article class="panel schedule-card-item'+(card.name===relevant?' is-relevant':'')+'" data-collection="'+card.name+'">'+(card.name===relevant?'<span class="schedule-match">방금 분석한 배출 구분</span>':'')+'<div class="schedule-card-top"><span class="schedule-glyph" aria-hidden="true">'+card.icon+'</span><span class="schedule-day-badge '+(card.info?.today?"today":"")+'">'+(card.info?.label||"지역별로 달라요")+'</span></div><h3>'+card.name+'</h3><strong class="schedule-weekdays">'+card.week+'</strong>'+(card.info&&!card.info.today?'<p class="schedule-next">다음 정기 수거: '+card.info.date+'</p>':"")+'<p class="schedule-card-detail">'+card.detail+'</p>'+(card.name==="생활쓰레기"?bagLink:"")+'</article>').join("");
    const message=el("schedule-linked-message"),matched=cards.find(card=>card.name===relevant);
    if(message)message.textContent=analysis.uncertain?"아직 배출 구분이 확실하지 않아요. 분석 결과의 확인 질문을 먼저 살펴봐 주세요.":analysis.category==="별도배출"?"이 품목은 별도 수거 방법을 따라 주세요. 아래 정기 일정은 생활·음식물·재활용품 안내입니다.":analysis.category==="복합배출"?"분리한 부품마다 해당하는 수거일을 확인해 주세요. 별도배출 부품은 전용 수거 방법을 따라 주세요.":area&&matched?.info?area.name+" · "+relevant+": "+matched.info.label+(matched.info.today?"":" ("+matched.info.date+")")+". 배출 시간도 함께 확인해 주세요.":"동네를 선택하면 "+relevant+" 정기 수거일을 바로 확인할 수 있어요.";
  }
  select.addEventListener("change",()=>{locationRequest++;button.disabled=false;flow.setRegion(select.value);status.className="status";status.textContent=select.value?select.value+" 기준입니다. 공휴일과 임시 변경 안내도 확인해 주세요.":"동 또는 산업단지를 선택해 주세요.";render()});
  let boundariesPromise;
  const loadBoundaries=()=>boundariesPromise||(boundariesPromise=fetch("/gwangsan-dongs.geojson").then(async response=>{if(!response.ok)throw Error();const data=await response.json();if(data.features?.length!==21)throw Error();return data.features}).catch(error=>{boundariesPromise=null;throw error}));
  button.addEventListener("click",async()=>{
    if(!navigator.geolocation){status.textContent="이 기기에서는 위치를 사용할 수 없어요. 지역을 직접 선택해 주세요.";return}
    const request=++locationRequest;
    button.disabled=true;select.value="";flow.setRegion(null);render();status.className="status busy";status.textContent="새 위치로 우리동네를 확인하고 있어요…";
    try{
      const position=await new Promise((resolve,reject)=>navigator.geolocation.getCurrentPosition(resolve,reject,{enableHighAccuracy:true,maximumAge:0,timeout:15000}));
      const {latitude,longitude,accuracy}=position.coords;
      if(!Number.isFinite(accuracy)||accuracy>500)throw new Error("위치 오차가 커서 동을 정확히 찾기 어려워요. 지역을 직접 선택해 주세요.");
      const dong=locateDong([longitude,latitude],accuracy,await loadBoundaries());
      if(request!==locationRequest)return;
      if(!dong)throw new Error("현재 위치가 광산구 안으로 확인되지 않았어요. 조회할 지역을 직접 선택해 주세요.");
      if(dong.boundaryNearby)throw new Error(dong.name+" 인근 동 경계에 있어요. 정확한 동을 직접 선택해 주세요.");
      if(!SCHEDULE_AREAS.some(a=>a.name===dong.name))throw new Error("해당 지역을 정확히 구분하지 못했어요. 지역을 직접 선택해 주세요.");
      select.value=dong.name;flow.setRegion(dong.name,"gps");flow.setPosition({lat:latitude,lon:longitude,accuracy,source:"schedule"});render();status.textContent=dong.name+"으로 찾았어요 (위치 오차 약 "+Math.ceil(accuracy)+"m). 지역이 맞는지 확인해 주세요. 산업단지는 해당 단지를 직접 선택해 주세요.";
    }catch(error){if(request!==locationRequest)return;status.textContent=error.code===1?"위치 권한이 꺼져 있어요. 권한을 허용하거나 지역을 직접 선택해 주세요.":error.code===2||error.code===3?"현재 위치를 확인하지 못했어요. 지역을 직접 선택해 주세요.":error.message||"동 경계 자료를 불러오지 못했어요. 지역을 직접 선택해 주세요."}
    finally{if(request===locationRequest){button.disabled=false;status.className="status"}}
  });
  addEventListener("app:flowchange",()=>{
    select.value=flow.region?.name||"";
    render();
  });
  addEventListener("app:position",async event=>{
    const position=event.detail;if(position.source==="schedule")return;
    const request=++locationRequest;
    try{
      const dong=locateDong([position.lon,position.lat],position.accuracy,await loadBoundaries());
      if(request!==locationRequest)return;
      if(!dong||dong.boundaryNearby){flow.setRegion(null);status.textContent="확인한 위치에서 동을 정확히 구분하기 어려워요. 지역을 직접 선택해 주세요.";return}
      flow.setRegion(dong.name,"gps");status.textContent="판매소에서 확인한 위치 · "+dong.name+" 기준입니다. 지역이 맞는지 확인해 주세요.";
    }catch{if(request===locationRequest){flow.setRegion(null);status.textContent="동을 확인하지 못했어요. 지역을 직접 선택해 주세요."}}
    finally{if(request===locationRequest){button.disabled=false;status.className="status"}}
  });
  document.addEventListener("visibilitychange",()=>{if(!document.hidden)render()});
  render();
}
if(typeof document!=="undefined")initializeSchedule();
