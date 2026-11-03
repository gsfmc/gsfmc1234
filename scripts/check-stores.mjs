import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {indexStores,searchStores,storesInBounds} from '../public/store-search.js';
const data=JSON.parse(await readFile(new URL('../data/gwangsan-stores.json',import.meta.url),'utf8'));
const boundaries=JSON.parse(await readFile(new URL('../public/gwangsan-dongs.geojson',import.meta.url),'utf8'));
const stores=indexStores(data.items,boundaries.features);
assert.equal(stores.length,736);
assert.equal(data.referenceDate,'2026-10-21');
assert.equal(data.sourceModifiedAt,'2026-10-22');
assert.equal(data.verifiedAt,'2026-11-03');
assert.equal(data.providerRecordCount,760);
assert.ok(stores.every(s=>s.referenceDate===data.referenceDate&&s.address.includes('광산구')));
assert.equal(stores.find(s=>s.name==='하나마트'&&s.address.includes('목련로 95')).dong,'월곡2동');
for(const query of ['하나마트','목련로 95','광주광역시 광산구 목련로 95','전남광주통합특별시 광산구 목련로95']){
  assert.ok(searchStores(stores,query).items.some(s=>s.name==='하나마트'),query);
}
for(const query of ['수완동','월곡2동','월곡동']){
  const result=searchStores(stores,query);assert.equal(result.mode,'match');assert.ok(result.items.length>0);
  assert.ok(result.items.every(s=>s.dong.includes(query==='월곡동'?'월곡':query)));
}
const road=searchStores(stores,'광산구 목련로 99999');
assert.equal(road.mode,'road');assert.ok(road.items.length>0);
assert.equal(searchStores(stores,'이세상에없는주소999999').mode,'none');
assert.equal(searchStores(stores,'광산구').mode,'empty');
const bounds={south:35.16,north:35.18,west:126.8,east:126.82};
const center={lat:35.172353847,lon:126.8081891608};
const visible=storesInBounds(stores,bounds,center);
assert.equal(visible[0].name,'하나마트');assert.ok(visible[0].km<.001);
assert.ok(visible.every(s=>s.lat>=bounds.south&&s.lat<=bounds.north&&s.lon>=bounds.west&&s.lon<=bounds.east));
assert.ok(visible.every((s,i)=>!i||s.km>=visible[i-1].km));
assert.equal(storesInBounds(stores,{south:37,north:38,west:126,east:127},center).length,0);
const shifted=storesInBounds(stores,{south:35.19,north:35.21,west:126.82,east:126.85},center);
assert.notDeepEqual(visible.map(s=>s.index),shifted.map(s=>s.index));
console.log('PASS: 736 official stores (2026-10-21), source dates, Gwangsan scope, full addresses, road/name/dong search, viewport filtering and distances.');
