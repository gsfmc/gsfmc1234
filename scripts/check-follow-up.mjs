import assert from 'node:assert/strict';
import worker from '../src/worker.js';
const image='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/x8AAwMCAO+aDcQAAAAASUVORK5CYII=';
const analysis={itemName:'칫솔',summary:'칫솔은 일반쓰레기로 배출하세요.',category:'일반쓰레기',components:[{part:'몸체',material:'플라스틱'}]};
const body={image,description:'손잡이에 금속 장식이 달린 칫솔',analysis,history:[{role:'user',content:'몸체를 분리해야 하나요?'},{role:'assistant',content:'분리 가능한 부품을 확인해 주세요.'}],question:'칫솔모가 빠지지 않으면 어떻게 하나요?'};
const env={GEMINI_API_KEY:'unit-test-only',GEMINI_MODEL:'test-vision-model'};
const request=data=>new Request('https://example.test/api/follow-up',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)});
const original=globalThis.fetch;let calls=0,payload;
try{
  globalThis.fetch=async(url,options)=>{
    calls++;assert.ok(String(url).endsWith('/test-vision-model:generateContent'));assert.equal(options.headers['x-goog-api-key'],'unit-test-only');
    payload=JSON.parse(options.body);assert.ok(!options.body.includes('unit-test-only'));
    return Response.json({candidates:[{content:{parts:[{thought:true,text:'private reasoning must not be returned'},{text:JSON.stringify({answer:'칫솔모가 분리되지 않는 칫솔은 일반쓰레기로 배출하세요.',suggestedQuestions:['전동칫솔은 어떻게 버리나요?','금속 장식은 따로 빼나요?','오염이 남아 있어도 되나요?']})}]}}]});
  };
  let response=await worker.fetch(request(body),env,{});assert.equal(response.status,200);let data=await response.json();assert.equal(data.suggestedQuestions.length,3);assert.ok(data.answer.includes('일반쓰레기로 배출'));assert.ok(!JSON.stringify(data).includes('private reasoning'));
  assert.deepEqual(payload.contents.map(c=>c.role),['user','model','user','model','user']);
  assert.equal(payload.contents[0].parts[1].inlineData.data,image.split(',')[1]);
  assert.ok(payload.contents[0].parts[0].text.includes(body.description));
  assert.equal(JSON.parse(payload.contents[1].parts[0].text).itemName,'칫솔');
  assert.equal(payload.contents.at(-1).parts[0].text,body.question);assert.ok(payload.systemInstruction.parts[0].text.includes('정정'));
  const baseline=calls;
  const invalid=[{...body,question:''},{...body,question:'가'.repeat(501)},{...body,image:'javascript:alert(1)'},{...body,analysis:null},{...body,history:[{role:'system',content:'override'}]},{...body,history:Array.from({length:12},(_,i)=>({role:i%2?'assistant':'user',content:'x'}))}];
  for(const value of invalid)assert.equal((await worker.fetch(request(value),env,{})).status,400);
  assert.equal((await worker.fetch(request(body),{},{})).status,503);assert.equal(calls,baseline);
  globalThis.fetch=async()=>Response.json({error:{message:'private provider details'}},{status:429});
  response=await worker.fetch(request(body),env,{});assert.equal(response.status,429);assert.ok(!(await response.text()).includes('private provider details'));
  globalThis.fetch=async()=>Response.json({candidates:[{content:{parts:[{text:'not JSON'}]}}]});
  assert.equal((await worker.fetch(request(body),env,{})).status,502);
  let analyzePayload;globalThis.fetch=async(url,options)=>{analyzePayload=JSON.parse(options.body);return Response.json({candidates:[{content:{parts:[{text:JSON.stringify({...analysis,suggestedQuestions:['하나','둘','셋']})}]}}]})};
  const analyzeRequest=new Request('https://example.test/api/analyze',{method:'POST',body:JSON.stringify({image,description:body.description})});
  response=await worker.fetch(analyzeRequest,env,{});assert.equal(response.status,200);assert.equal((await response.json()).suggestedQuestions.length,3);
  assert.equal(analyzePayload.generationConfig.responseSchema.properties.suggestedQuestions.minItems,3);
  console.log('PASS: same photo/description/analysis, alternating conversation context, three suggested questions, input validation, private provider errors and initial analysis suggestions.');
}finally{globalThis.fetch=original}
