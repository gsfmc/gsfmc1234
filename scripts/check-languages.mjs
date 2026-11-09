import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import worker from '../src/worker.js';
const source=await readFile(new URL('../public/i18n.js',import.meta.url),'utf8');
const context=vm.createContext({URLSearchParams,Intl,location:{search:''},localStorage:{getItem:()=>null}});
vm.runInContext(source.slice(0,source.indexOf('const originals=')),context);
const rows=vm.runInContext('COPY',context),codes=['ko','vi','zh-CN','ru','en','km'];
const keys=new Set();
for(const row of rows){assert.equal(row.length,6,row[0]);assert.ok(!keys.has(row[0]),'Duplicate: '+row[0]);keys.add(row[0]);const placeholders=v=>[...v.matchAll(/\{(\w+)\}/g)].map(m=>m[1]).sort();for(const text of row){assert.ok(text.trim());assert.deepEqual(placeholders(text),placeholders(row[0]),row[0])}}
for(const code of codes){
  vm.runInContext('locale='+JSON.stringify(code),context);
  for(const row of rows){if(row[0].includes('{'))continue;const result=vm.runInContext('translate('+JSON.stringify(row[0])+')',context);assert.equal(result,row[code==='ko'?0:({en:1,vi:2,'zh-CN':3,ru:4,km:5})[code]])}
  const result=vm.runInContext(`translate('수완동 · 재활용품: 오늘 정기 수거일. 배출 시간도 함께 확인해 주세요.')`,context);
  assert.ok(!result.includes('{'));if(code!=='ko')assert.ok(!result.includes('정기 수거일'),result);
  const next=vm.runInContext(`translate('다음 정기 수거: 11월 10일')`,context);if(code!=='ko')assert.ok(!/월|일/.test(next),next);
  const dated=vm.runInContext(`translate('수완동 · 재활용품: 내일 정기 수거일 (11월 10일). 배출 시간도 함께 확인해 주세요.')`,context);if(code!=='ko')assert.ok(!/[가-힣]/.test(dated.replace('수완동','')),dated);
  const metadata=vm.runInContext(`translate(' · 기준일 2026-10-21 · 영업 중 736곳 · 확인 2026-11-03')`,context);if(code!=='ko')assert.ok(!/[가-힣]/.test(metadata),metadata);
}
const image='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+a1ioAAAAASUVORK5CYII=';
const analysis={itemName:'bottle',summary:'Recycle this bottle.',category:'재활용'};
const env={GEMINI_API_KEY:'unit-test-only',GEMINI_MODEL:'test-model'};
const original=globalThis.fetch;let payload,calls=0;
try{
  globalThis.fetch=async(url,options)=>{calls++;payload=JSON.parse(options.body);return Response.json({candidates:[{content:{parts:[{text:JSON.stringify({...analysis,answer:'Recycle this bottle.',suggestedQuestions:['Q1?','Q2?','Q3?']})}]}}]})};
  const request=(route,body)=>new Request('https://example.test/api/'+route,{method:'POST',body:JSON.stringify(body)});
  const names={ko:'Korean',vi:'Vietnamese','zh-CN':'Simplified Chinese',ru:'Russian',en:'English',km:'Khmer'};
  for(const language of codes){
    assert.equal((await worker.fetch(request('analyze',{image,language}),env,{})).status,200);
    assert.ok(payload.contents[0].parts[0].text.includes(names[language]));
    assert.deepEqual(payload.generationConfig.responseSchema.properties.category.enum,['일반쓰레기','재활용','음식물','별도배출','복합배출','판단보류']);
    assert.equal((await worker.fetch(request('follow-up',{image,language,analysis,question:'What about the cap?'}),env,{})).status,200);
    assert.ok(payload.systemInstruction.parts[0].text.includes(names[language]));
    assert.equal(payload.contents[0].parts[1].inlineData.data,image.split(',')[1]);
  }
  const baseline=calls;
  for(const language of ['xx','__proto__',{},null]){
    if(language===null)continue;
    assert.equal((await worker.fetch(request('analyze',{image,language}),env,{})).status,400);
    assert.equal((await worker.fetch(request('follow-up',{image,language,analysis,question:'Q?'}),env,{})).status,400);
  }
  assert.equal(calls,baseline);
  let transientCalls=0;
  globalThis.fetch=async()=>++transientCalls===1?Response.json({error:{message:'provider private details'}},{status:503}):Response.json({candidates:[{content:{parts:[{text:JSON.stringify(analysis)}]}}]});
  assert.equal((await worker.fetch(request('analyze',{image,language:'vi'}),env,{})).status,200);
  assert.equal(transientCalls,2);
}finally{globalThis.fetch=original}
console.log('PASS: '+rows.length+' complete six-language UI entries, template arguments, collection dates, all six AI language prompts, stable category enum and invalid-language rejection.');
