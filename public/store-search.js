import {pointInGeometry,distance} from './geo.js';
export const hasCoordinates=s=>s.lat!=null&&s.lon!=null&&Number.isFinite(Number(s.lat))&&Number.isFinite(Number(s.lon));
export function normalizeSearch(value){
  return String(value??'').normalize('NFKC').toLowerCase().replace(/전남광주통합특별시|광주광역시|광산구|광주시|광주/g,'').replace(/[^가-힣a-z0-9]/g,'');
}
export function indexStores(items,features=[]){
  return items.filter(hasCoordinates).map((s,index)=>{
    const feature=features.find(f=>pointInGeometry([Number(s.lon),Number(s.lat)],f.geometry));
    const dong=feature?.properties.adm_nm.trim().split(/\s+/).at(-1)||'';
    const dongAlias=dong.replace(/[12](?=동$)/,'');
    return {...s,index,lat:Number(s.lat),lon:Number(s.lon),dong,search:normalizeSearch(s.name+' '+s.address+' '+dong+' '+dongAlias)};
  });
}
export function searchStores(stores,value){
  const query=normalizeSearch(value);
  if(!query)return {items:[],mode:'empty'};
  const tokens=String(value).replace(/전남광주통합특별시|광주광역시|광산구|광주시|광주/g,'').trim().split(/\s+/).map(normalizeSearch).filter(Boolean);
  const includes=token=>text=>text.includes(token)&&(!/\d$/.test(token)||new RegExp(token+'(?![0-9])').test(text));
  const matches=stores.filter(s=>includes(query)(s.search)||(tokens.length&&tokens.every(t=>includes(t)(s.search))));
  if(matches.length)return {items:matches,mode:'match'};
  // If a building number is absent from the dataset, show registered shops on that road.
  const road=String(value).match(/([가-힣0-9]+(?:대로|로|길))(?:\s*(\d+)(?:-(\d+))?)?/);
  if(road){
    const needle=normalizeSearch(road[1]);
    const nearby=stores.filter(s=>normalizeSearch(s.address).includes(needle));
    const number=Number(road[2]);
    const building=s=>Number(s.address.match(new RegExp(road[1]+'\\s*(\\d+)'))?.[1]??1e9);
    if(Number.isFinite(number))nearby.sort((a,b)=>Math.abs(building(a)-number)-Math.abs(building(b)-number));
    if(nearby.length)return {items:nearby,mode:'road',road:road[1]};
  }
  return {items:[],mode:'none'};
}
export function storesInBounds(stores,bounds,center){
  return stores.filter(s=>s.lat>=bounds.south&&s.lat<=bounds.north&&s.lon>=bounds.west&&s.lon<=bounds.east)
    .map(s=>({...s,km:distance(center,s)})).sort((a,b)=>a.km-b.km);
}
