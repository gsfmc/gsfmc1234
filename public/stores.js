import {indexStores,searchStores,storesInBounds} from './store-search.js';

const el=id=>document.getElementById(id);
const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const distanceLabel=km=>km<1?Math.round(km*1000)+'m':km.toFixed(1)+'km';
let stores=[],map,clusters,icons,markers=[],selected=null,selectedLayer=null,userPoint=null,userAccuracy=null,locationLayer;
let ready,leafletReady,watch=null,locationTimer=null,locationRun=0;
function status(text){el('location-status').textContent=text}

function loadLeaflet(){
  const loadScript=src=>new Promise((resolve,reject)=>{
    const script=document.createElement('script');script.src=src;
    script.onload=resolve;script.onerror=()=>{script.remove();reject(Error('map'))};document.head.append(script);
  });
  return leafletReady||(leafletReady=(async()=>{
    if(!window.L)await loadScript('/vendor/leaflet.js');
    if(!window.L.markerClusterGroup)await loadScript('/vendor/leaflet.markercluster.js');
    return window.L;
  })().catch(error=>{leafletReady=null;throw error}));
}
async function loadData(){
  const [response,boundaryResponse]=await Promise.all([fetch('/api/stores'),fetch('/gwangsan-dongs.geojson').catch(()=>null)]);
  if(!response.ok)throw Error('data');
  const data=await response.json();
  // Road and shop search still work if the optional administrative boundaries fail.
  const features=boundaryResponse?.ok?(await boundaryResponse.json().catch(()=>({features:[]}))).features:[];
  stores=indexStores(data.items||[],features);
  el('store-source').innerHTML='출처: <a href="'+escape(data.sourceUrl)+'" target="_blank" rel="noopener">공공데이터포털</a> · 기준일 '+escape(data.referenceDate||'확인 필요')+' · 영업 중 '+stores.length+'곳';
}
async function ensureMap(){
  if(map){requestAnimationFrame(()=>map.invalidateSize({pan:false}));return map}
  if(ready)return ready;
  ready=(async()=>{
    try{
      const [L]=await Promise.all([loadLeaflet(),loadData()]);
      map=L.map(el('store-map'),{preferCanvas:true,zoomControl:false,minZoom:10,maxZoom:19,attributionControl:true});
      map.attributionControl.setPrefix(false);
      map.setView([35.176,126.811],14);
      const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom:19,referrerPolicy:'origin',keepBuffer:1,updateWhenIdle:true,updateWhenZooming:false,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
      });
      let loaded=0,failed=0;
      tiles.on('loading',()=>{loaded=0;failed=0});
      tiles.on('tileload',()=>loaded++);tiles.on('tileerror',()=>failed++);
      tiles.on('load',()=>{el('map-load-note').hidden=!(failed>0&&loaded===0)});
      tiles.addTo(map);
      icons={normal:L.divIcon({className:'store-pin',iconSize:[20,20],iconAnchor:[10,10],html:'<span></span>'}),selected:L.divIcon({className:'store-pin selected',iconSize:[24,24],iconAnchor:[12,12],html:'<span></span>'})};
      clusters=L.markerClusterGroup({
        maxClusterRadius:60,showCoverageOnHover:false,zoomToBoundsOnClick:true,spiderfyOnMaxZoom:true,animate:false,
        spiderfyDistanceMultiplier:1.5,removeOutsideVisibleBounds:true,
        iconCreateFunction:cluster=>{
          const count=cluster.getChildCount(),size=count>=100?48:40;
          return L.divIcon({className:'store-cluster',iconSize:[size,size],html:'<span aria-label="판매소 '+count+'곳. 누르면 확대됩니다.">'+count+'</span>'});
        }
      });
      markers=stores.map(s=>L.marker([s.lat,s.lon],{icon:icons.normal,title:s.name,alt:s.name,riseOnHover:true})
        .bindTooltip(escape(s.name),{direction:'top',offset:[0,-6]})
        .on('click',()=>selectStore(s.index,false)));
      clusters.addLayers(markers);clusters.addTo(map);
      map.on('moveend zoomend',renderViewport);
      new ResizeObserver(()=>{if(!el('stores').hidden)map.invalidateSize({pan:false})}).observe(el('store-map'));
      status('숫자를 누르면 묶인 판매소가 펼쳐져요. 동·도로명·판매소명으로도 검색할 수 있어요.');
      renderViewport();
      return map;
    }catch(error){
      ready=null;status('지도와 판매소를 불러오지 못했어요. 다시 시도해 주세요.');
      el('store-list').innerHTML='<div class="store-empty">연결을 확인한 뒤 <button type="button" id="retry-stores">다시 불러오기</button></div>';
      throw error;
    }
  })();
  return ready;
}
function updateLinks(){
  if(!map)return;
  const s=selected===null?null:stores[selected],center=map.getCenter();
  const point=s?{lat:s.lat,lon:s.lon}:{lat:center.lat,lon:center.lng};
  el('map-open').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(point.lat+','+point.lon);
  el('map-open').hidden=false;
  el('map-directions').hidden=!s;
  if(s){
    const place=encodeURIComponent(s.name)+','+s.lat+','+s.lon;
    if(userPoint&&userAccuracy<=100){
      el('map-directions').href='https://map.kakao.com/link/by/walk/'+encodeURIComponent('현재 위치')+','+userPoint.lat+','+userPoint.lon+'/'+place;
      el('map-directions').textContent='카카오맵 도보 길찾기';
      el('directions-note').textContent='현재 위치에서 선택한 판매소까지 도보 경로를 열어요.';
    }else{
      el('map-directions').href='https://map.kakao.com/link/to/'+place;
      el('map-directions').textContent='카카오맵 길찾기';
      el('directions-note').textContent='카카오맵에서 출발지와 도보를 선택해 주세요.';
    }
  }else el('directions-note').textContent='숫자를 누르면 확대되고, 개별 판매소를 누르면 길찾기를 볼 수 있어요.';
  el('map-zoom-out').disabled=map.getZoom()<=map.getMinZoom();
  el('map-zoom-in').disabled=map.getZoom()>=map.getMaxZoom();
}
function renderViewport(){
  if(!map)return;
  const bounds=map.getBounds(),center=map.getCenter();
  const visible=storesInBounds(stores,{south:bounds.getSouth(),north:bounds.getNorth(),west:bounds.getWest(),east:bounds.getEast()},{lat:center.lat,lon:center.lng});
  if(selected!==null&&!visible.some(s=>s.index===selected)){
    if(selectedLayer){map.removeLayer(selectedLayer);selectedLayer=null}selected=null;map.closePopup();
  }
  const chosen=selected===null?null:stores[selected];
  el('map-store-name').textContent=chosen?chosen.name:'지도 안 판매소 '+visible.length+'곳';
  el('map-address').textContent=chosen?chosen.address:'숫자는 모여 있는 판매소 수예요 · 누르면 확대';
  el('map-store-count').textContent='지도 안 '+visible.length+'곳 · 지도 중심 기준 직선거리';
  el('store-map').dataset.visibleCount=visible.length;
  el('store-map').dataset.zoom=map.getZoom();
  el('store-list').innerHTML=visible.length?visible.map(s=>'<button class="store-item '+(selected===s.index?'active':'')+'" type="button" data-store="'+s.index+'" aria-pressed="'+(selected===s.index)+'"><span><strong>'+escape(s.name)+'</strong><span>'+escape(s.address)+'</span><span>대형폐기물 스티커 · '+escape(s.sticker||'정보 없음')+(s.phone?' · '+escape(s.phone):'')+'</span></span><em>'+distanceLabel(s.km)+'</em></button>').join(''):'<div class="store-empty"><strong>이 범위에는 등록된 판매소가 없어요</strong><p>지도를 축소하거나 다른 동네로 움직여 보세요.</p></div>';
  updateLinks();
}
function selectStore(index,pan=true){
  const s=stores[index];if(!s||!map)return;
  if(selectedLayer){map.removeLayer(selectedLayer);selectedLayer=null}
  selected=index;
  if(pan)map.setView([s.lat,s.lon],Math.max(map.getZoom(),16),{animate:false});
  selectedLayer=window.L.marker([s.lat,s.lon],{icon:icons.selected,title:s.name,zIndexOffset:1000}).bindTooltip(escape(s.name),{direction:'top',offset:[0,-8]}).addTo(map);
  renderViewport();
  // A header and selected list row remain readable even when the map is short on mobile.
}
el('store-list').addEventListener('click',e=>{
  const button=e.target.closest('[data-store]');if(button)selectStore(Number(button.dataset.store));
  if(e.target.closest('#retry-stores'))ensureMap().catch(()=>{});
});
el('map-zoom-in').addEventListener('click',()=>map?.zoomIn());
el('map-zoom-out').addEventListener('click',()=>map?.zoomOut());

const input=el('address-input'),suggestions=el('address-suggestions');
function hideSuggestions(){suggestions.hidden=true;suggestions.innerHTML=''}
function suggest(){
  if(!stores.length||!input.value.trim()){hideSuggestions();return}
  const result=searchStores(stores,input.value);
  const items=result.mode==='road'?[]:result.items.slice(0,6);
  suggestions.innerHTML=items.map(s=>'<button type="button" data-suggestion="'+s.index+'"><strong>'+escape(s.name)+'</strong><span>'+escape(s.address)+'</span></button>').join('');
  suggestions.hidden=!items.length;
}
input.addEventListener('input',suggest);input.addEventListener('focus',suggest);
input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();searchAddress()}if(e.key==='Escape')hideSuggestions()});
document.addEventListener('click',e=>{if(!e.target.closest('.address-search'))hideSuggestions()});
suggestions.addEventListener('click',e=>{
  const button=e.target.closest('[data-suggestion]');if(!button)return;
  const s=stores[Number(button.dataset.suggestion)];stopLocation();input.value=s.name;hideSuggestions();selectStore(s.index);status(s.name+' · 등록된 판매소 위치를 표시했어요.');
});
async function searchAddress(){
  try{await ensureMap()}catch{return}
  stopLocation();hideSuggestions();
  const value=input.value.trim(),result=searchStores(stores,value);
  if(!result.items.length){
    status(result.mode==='empty'?'동·도로명·판매소명을 입력해 주세요. 예: 수완동, 목련로 95, 하나마트':'등록된 판매소에서 찾지 못했어요. 도로명이나 동 이름으로 다시 검색하거나 내 위치를 이용해 주세요.');return;
  }
  if(selectedLayer){map.removeLayer(selectedLayer);selectedLayer=null}selected=null;
  if(result.items.length===1)selectStore(result.items[0].index);
  else{
    map.fitBounds(window.L.latLngBounds(result.items.map(s=>[s.lat,s.lon])),{padding:[30,30],maxZoom:16,animate:false});renderViewport();
  }
  status(result.mode==='road'?'정확히 일치하는 주소가 없어 '+result.road+'에 등록된 판매소 '+result.items.length+'곳을 보여드려요.':value+' 검색 '+result.items.length+'곳 · 지도 안의 주변 판매소도 함께 보여드려요.');
}
el('search-address').addEventListener('click',searchAddress);

function stopLocation(){
  locationRun++;
  if(watch!==null){navigator.geolocation.clearWatch(watch);watch=null}
  clearTimeout(locationTimer);locationTimer=null;el('use-location').disabled=false;
}
el('use-location').addEventListener('click',async()=>{
  try{await ensureMap()}catch{return}
  if(!navigator.geolocation){status('이 기기에서는 위치를 사용할 수 없어요. 동·도로명으로 찾아보세요.');return}
  stopLocation();hideSuggestions();input.value='';userPoint=null;userAccuracy=null;
  if(locationLayer){map.removeLayer(locationLayer);locationLayer=null}updateLinks();
  const run=locationRun;let best=Infinity,received=false;
  el('use-location').disabled=true;status('새 위치를 확인하고 있어요. 위치 권한을 허용해 주세요…');
  watch=navigator.geolocation.watchPosition(position=>{
    if(run!==locationRun)return;
    const {latitude:lat,longitude:lon,accuracy}=position.coords;
    if(!Number.isFinite(lat)||!Number.isFinite(lon)||!Number.isFinite(accuracy)||accuracy>=best)return;
    received=true;best=accuracy;
    if(accuracy>500){status('위치 오차가 약 '+Math.ceil(accuracy)+'m로 커요. 동·도로명 검색을 이용해 주세요.');return}
    userPoint={lat,lon};userAccuracy=accuracy;
    if(locationLayer)map.removeLayer(locationLayer);
    locationLayer=window.L.layerGroup([
      window.L.circle([lat,lon],{radius:accuracy,color:'#2674df',weight:1,fillOpacity:.08,interactive:false}),
      window.L.circleMarker([lat,lon],{radius:7,color:'#fff',weight:3,fillColor:'#2674df',fillOpacity:1}).bindTooltip('현재 위치 · 오차 약 '+Math.ceil(accuracy)+'m')
    ]).addTo(map);
    map.setView([lat,lon],16,{animate:false});renderViewport();
    status('파란 점이 내 위치예요 · 위치 오차 약 '+Math.ceil(accuracy)+'m. 지도를 움직여 주변을 확인하세요.');
    if(accuracy<=80)stopLocation();
  },error=>{
    if(run!==locationRun)return;stopLocation();
    if(!userPoint)status(error.code===1?'위치 권한이 꺼져 있어요. 권한을 허용하거나 동·도로명으로 찾아보세요.':'위치를 확인하지 못했어요. 동·도로명으로 찾아보세요.');
  },{enableHighAccuracy:true,maximumAge:0,timeout:15000});
  locationTimer=setTimeout(()=>{if(run!==locationRun)return;stopLocation();if(!received)status('위치를 확인하지 못했어요. 동·도로명으로 찾아보세요.')},18000);
});
addEventListener('pagehide',stopLocation);
addEventListener('app:viewchange',event=>{if(event.detail==='stores')ensureMap().catch(()=>{});else{stopLocation();hideSuggestions()}});
if(!el('stores').hidden)ensureMap().catch(()=>{});
