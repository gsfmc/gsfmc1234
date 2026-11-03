import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';

// Run manually when refreshing the official portal snapshot; no API key is needed.
const sourceUrl='https://www.data.go.kr/data/15114144/standard.do';
const providerDetailId='uddi:788aefe0-987f-4d06-9c77-b002b0b402f9';
const verifiedAt=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Seoul'}).format(new Date());
let records=[],sourceModifiedAt;
const inputPaths=process.argv.slice(2);
if(inputPaths.length){
  for(const path of inputPaths)records.push(...JSON.parse((await readFile(path,'utf8')).replace(/^\uFEFF/,'')));
  sourceModifiedAt=process.env.SOURCE_MODIFIED_AT;
}else{
  const get=async url=>{const response=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!response.ok)throw Error('Portal HTTP '+response.status);return response};
  const header=await (await get('https://www.data.go.kr/download/columList.json?pk=15114144&ext=JSON')).json();
  if(!header.tableVO?.svcTableNm||!header.totalCount)throw Error('Portal schema changed');
  for(let page=1;page<=Math.ceil(header.totalCount/10000);page++){
    const query=new URLSearchParams({publicDataPk:'15114144',svcTableNm:header.tableVO.svcTableNm,perPage:'10000',page:String(page),totalCount:String(header.totalCount)});
    for(const name of header.tableVO.colNmList)query.append('colNmList',name);
    const result=await (await get('https://www.data.go.kr/download/standard.json?'+query)).json();
    if(!Array.isArray(result))throw Error('Portal records are not an array');
    records.push(...result);
  }
  if(records.length!==header.totalCount)throw Error('Incomplete portal download');
  const response=await fetch('https://www.data.go.kr/tcs/dss/selectDpkDetailInfo.do',{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({publicDataDetailPk:providerDetailId}),signal:AbortSignal.timeout(45000)});
  if(!response.ok)throw Error('Provider metadata unavailable');
  sourceModifiedAt=(await response.text()).match(/수정일[\s\S]{0,150}?(\d{4}-\d{2}-\d{2})/)?.[1];
}
if(!/^\d{4}-\d{2}-\d{2}$/.test(sourceModifiedAt||''))throw Error('Provider modified date is missing');
const providerRows=records.filter(s=>s.INSTT_CODE==='5825000'&&s.INSTT_NM?.endsWith(' 광산구'));
const rows=providerRows.filter(s=>s.SGG_NM==='광산구'&&s.BUSI_COD_NM==='영업'&&!s.EOB_YMD?.trim());
if(rows.length<500)throw Error('Unexpectedly few Gwangsan stores; keep the previous snapshot');
const dates=[...new Set(rows.map(s=>s.CRTR_YMD))];
if(dates.length!==1||!/^\d{4}-\d{2}-\d{2}$/.test(dates[0]))throw Error('Check mixed or invalid reference dates');
const previous=JSON.parse(await readFile('data/gwangsan-stores.json','utf8'));
if(dates[0]<previous.referenceDate)throw Error('Refusing an older snapshot');
const items=rows.map(s=>{
  const lat=Number(s.LAT),lon=Number(s.LOT),address=(s.LCTN_ROAD_NM_ADDR||s.LCTN_LOTNO_ADDR||'').trim();
  if(!s.LAT||!s.LOT||!Number.isFinite(lat)||!Number.isFinite(lon)||lat<35||lat>35.4||lon<126.5||lon>127||!address||!s.STO_NM)throw Error('Check incomplete store '+s.STO_NM);
  return {name:s.STO_NM.trim(),address,lat,lon,sticker:s.LAR_WAS_STI_YN==='Y'?'예':s.LAR_WAS_STI_YN==='N'?'아니오':'정보 없음',phone:s.TELNO?.trim()||'',referenceDate:s.CRTR_YMD};
});
const revision=createHash('sha256').update(JSON.stringify(items)).digest('hex').slice(0,12);
const data={items,referenceDate:dates[0],sourceUrl,sourceModifiedAt,verifiedAt,revision,providerDetailId,providerRecordCount:providerRows.length,scope:'광산구 소재 영업 중 판매소. 광산구 외 소재 판매소는 제외.'};
const appPath='public/stores.js',app=await readFile(appPath,'utf8');
const pattern=/const STORE_DATA_REVISION='[^']*';/;
if(!pattern.test(app))throw Error('Store cache version marker is missing');
await writeFile('data/gwangsan-stores.json',JSON.stringify(data,null,2)+'\n','utf8');
await writeFile(appPath,app.replace(pattern,"const STORE_DATA_REVISION='"+revision+"';"),'utf8');
console.log(JSON.stringify({referenceDate:data.referenceDate,sourceModifiedAt,verifiedAt,previous:previous.items.length,current:items.length,providerTotal:providerRows.length,revision}));
