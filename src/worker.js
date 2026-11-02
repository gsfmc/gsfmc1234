const STATIC_STORES=null;
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}});

export default {
  async fetch(request,env,ctx){
    const url=new URL(request.url);
    if(url.pathname==="/api/analyze"&&request.method==="POST")return analyze(request,env);
    if(url.pathname==="/api/stores"&&request.method==="GET")return stores(request,ctx);
    if(url.pathname.startsWith("/api/"))return json({message:"요청한 기능을 찾을 수 없습니다."},404);
    if(env.ASSETS)return env.ASSETS.fetch(request);
    return new Response("Site assets binding is unavailable.",{status:503});
  }
};

async function analyze(request,env){
  if(!env.GEMINI_API_KEY)return json({message:"AI_SETUP_REQUIRED"},503);
  let body;
  try{body=await request.json()}catch{return json({message:"올바른 요청이 아닙니다."},400)}
  const match=/^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/.exec(body.image||"");
  if(!match)return json({message:"지원하지 않는 사진 형식입니다."},400);
  if(match[2].length>10_000_000)return json({message:"사진 용량이 너무 큽니다."},413);

  const schema={
    type:"OBJECT",
    properties:{
      itemName:{type:"STRING",description:"사진에서 가장 가능성이 높은 물품명. 불확실하면 '판단 어려움'"},
      confidence:{type:"STRING",enum:["high","medium","low"]},
      summary:{type:"STRING",description:"물건은 무엇으로 보이며 핵심 배출 방법은 무엇인지 쉬운 한국어 1~2문장"},
      category:{type:"STRING",enum:["일반쓰레기","재활용","음식물","별도배출","복합배출","판단보류"]},
      components:{type:"ARRAY",items:{type:"OBJECT",properties:{part:{type:"STRING"},material:{type:"STRING"}},required:["part","material"]}},
      steps:{type:"ARRAY",items:{type:"OBJECT",properties:{part:{type:"STRING"},action:{type:"STRING"},detail:{type:"STRING"}},required:["part","action","detail"]}},
      preparation:{type:"ARRAY",items:{type:"STRING"}},
      warnings:{type:"ARRAY",items:{type:"STRING"}},
      alternatives:{type:"ARRAY",items:{type:"STRING"}},
      questions:{type:"ARRAY",items:{type:"STRING"}}
    },
    required:["itemName","confidence","summary","category","components","steps","preparation","warnings","alternatives","questions"]
  };
  const prompt=[
    "당신은 대한민국 광주광역시 광산구 시민을 위한 생활폐기물 분리배출 안내자입니다.",
    "사진 자체를 직접 관찰해 물건, 구성 부품, 보이는 재질을 분석하세요. 저장된 품목 사진이나 유사 이미지 검색 결과를 가정하지 마세요.",
    "답변은 한국어로 쉽고 구체적으로 작성하세요. '사진 속 물건은 ~로 보입니다. ~부분은 분리하고, ~한 뒤 ~로 배출하세요'처럼 바로 행동할 수 있게 안내하세요.",
    "여러 재질이 붙은 제품은 부품별로 분리 순서를 제시하세요. 사진으로 확인할 수 없는 재질은 추측을 사실처럼 말하지 마세요.",
    "확신이 낮으면 confidence를 low, category를 판단보류로 두고, 가능한 품목 2~3개와 사용자가 확인할 재질·용도 질문을 제시하세요.",
    "리튬 배터리, 스프레이통, 깨진 유리처럼 위험할 수 있는 품목은 화재·상해 예방 주의사항을 포함하세요.",
    "광산구 세부 규정이 확실하지 않은 내용은 '지역 최신 기준 확인'이라고 적으세요. 판매소나 수거일을 만들어내지 마세요."
  ].join("\n");

  const model=env.GEMINI_MODEL||"gemini-3.5-flash";
  const endpoint="https://generativelanguage.googleapis.com/v1beta/models/"+encodeURIComponent(model)+":generateContent";
  let response;
  try{
    response=await fetch(endpoint,{method:"POST",headers:{"content-type":"application/json","x-goog-api-key":env.GEMINI_API_KEY},body:JSON.stringify({
      contents:[{role:"user",parts:[{text:prompt},{inlineData:{mimeType:match[1],data:match[2]}}]}],
      generationConfig:{responseMimeType:"application/json",responseSchema:schema,temperature:.2,maxOutputTokens:3000}
    })});
  }catch{return json({message:"AI 서비스에 연결하지 못했어요."},502)}
  const result=await response.json().catch(()=>({}));
  if(!response.ok){
    const reason=result&&result.error&&result.error.message;
    return json({message:reason&&reason.includes("API key")?"AI API 키를 확인해 주세요.":"AI 분석 요청을 처리하지 못했어요."},502);
  }
  const text=result?.candidates?.[0]?.content?.parts?.map(p=>p.text||"").join("")||"";
  try{return json(JSON.parse(text))}catch{return json({message:"AI 응답을 읽지 못했어요. 다시 촬영해 주세요."},502)}
}

async function stores(){
  if(!STATIC_STORES)return json({message:"판매소 데이터가 준비되지 않았습니다."},503);
  const response=json(STATIC_STORES);
  response.headers.set("cache-control","public, max-age=21600");
  return response;
}
