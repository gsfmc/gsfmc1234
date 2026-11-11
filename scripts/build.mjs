import {mkdir,rm,readFile,writeFile,copyFile} from "node:fs/promises";

const [html,css,app,schedule,boundaries,worker,stores,storeApp,storeSearch,geo,leaflet,leafletCss,leafletLicense,cluster,clusterCss,clusterLicense]=await Promise.all([
  readFile("public/index.html","utf8"),
  readFile("public/styles.css","utf8"),
  readFile("public/app.js","utf8"),
  readFile("public/schedule.js","utf8"),
  readFile("public/gwangsan-dongs.geojson","utf8"),
  readFile("src/worker.js","utf8"),
  readFile("data/gwangsan-stores.json","utf8"),
  readFile("public/stores.js","utf8"),
  readFile("public/store-search.js","utf8"),
  readFile("public/geo.js","utf8"),
  readFile("public/vendor/leaflet.js","utf8"),
  readFile("public/vendor/leaflet.css","utf8"),
  readFile("public/vendor/leaflet-LICENSE.txt","utf8"),
  readFile("public/vendor/leaflet.markercluster.js","utf8"),
  readFile("public/vendor/MarkerCluster.css","utf8"),
  readFile("public/vendor/markercluster-LICENSE.txt","utf8"),
]);
const normalizedWorker=worker.replace(/\r\n/g,"\n").replace("const STATIC_STORES=null;","const STATIC_STORES="+stores.trim()+";");
const i18n=await readFile('public/i18n.js','utf8');
const agencyCi=await readFile('public/assets/gsfmc-ci-ko.png');
const marker='    if(env.ASSETS)return env.ASSETS.fetch(request);\n    return new Response("Site assets binding is unavailable.",{status:503});';
if(!normalizedWorker.includes(marker))throw new Error("Static fallback marker is missing.");
const staticSource=[
  "const STATIC_HTML="+JSON.stringify(html)+";",
  "const STATIC_AGENCY_CI="+JSON.stringify(agencyCi.toString('base64'))+";",
  "const STATIC_I18N="+JSON.stringify(i18n)+";",
  "const STATIC_CSS="+JSON.stringify(css)+";",
  "const STATIC_APP="+JSON.stringify(app)+";",
  "const STATIC_SCHEDULE="+JSON.stringify(schedule)+";",
  "const STATIC_BOUNDARIES="+boundaries.trim()+";",
  "const STATIC_STORE_APP="+JSON.stringify(storeApp)+";",
  "const STATIC_STORE_SEARCH="+JSON.stringify(storeSearch)+";",
  "const STATIC_GEO="+JSON.stringify(geo)+";",
  "const STATIC_LEAFLET="+JSON.stringify(leaflet)+";",
  "const STATIC_LEAFLET_CSS="+JSON.stringify(leafletCss)+";",
  "const STATIC_LEAFLET_LICENSE="+JSON.stringify(leafletLicense)+";",
  "const STATIC_CLUSTER="+JSON.stringify(cluster)+";",
  "const STATIC_CLUSTER_CSS="+JSON.stringify(clusterCss)+";",
  "const STATIC_CLUSTER_LICENSE="+JSON.stringify(clusterLicense)+";",
  "",
].join("\n");
const staticHandler=[
  '    if(url.pathname==="/assets/gsfmc-ci-ko.png")return new Response(Uint8Array.from(atob(STATIC_AGENCY_CI),character=>character.charCodeAt(0)),{headers:{"content-type":"image/png","cache-control":"public, max-age=86400"}});',
  '    if(url.pathname==="/i18n.js")return new Response(STATIC_I18N,{headers:{"content-type":"text/javascript; charset=utf-8","cache-control":"no-cache"}});',
  '    if(url.pathname==="/styles.css")return new Response(STATIC_CSS,{headers:{"content-type":"text/css; charset=utf-8","cache-control":"no-cache"}});',
  '    if(url.pathname==="/app.js")return new Response(STATIC_APP,{headers:{"content-type":"text/javascript; charset=utf-8","cache-control":"no-cache"}});',
  '    if(url.pathname==="/schedule.js")return new Response(STATIC_SCHEDULE,{headers:{"content-type":"text/javascript; charset=utf-8","cache-control":"no-cache"}});',
  '    if(url.pathname==="/stores.js")return new Response(STATIC_STORE_APP,{headers:{"content-type":"text/javascript; charset=utf-8","cache-control":"no-cache"}});',
  '    if(url.pathname==="/store-search.js")return new Response(STATIC_STORE_SEARCH,{headers:{"content-type":"text/javascript; charset=utf-8","cache-control":"no-cache"}});',
  '    if(url.pathname==="/geo.js")return new Response(STATIC_GEO,{headers:{"content-type":"text/javascript; charset=utf-8","cache-control":"no-cache"}});',
  '    if(url.pathname==="/vendor/leaflet.js")return new Response(STATIC_LEAFLET,{headers:{"content-type":"text/javascript; charset=utf-8","cache-control":"public, max-age=86400"}});',
  '    if(url.pathname==="/vendor/leaflet.css")return new Response(STATIC_LEAFLET_CSS,{headers:{"content-type":"text/css; charset=utf-8","cache-control":"public, max-age=86400"}});',
  '    if(url.pathname==="/vendor/leaflet-LICENSE.txt")return new Response(STATIC_LEAFLET_LICENSE,{headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=86400"}});',
  '    if(url.pathname==="/vendor/leaflet.markercluster.js")return new Response(STATIC_CLUSTER,{headers:{"content-type":"text/javascript; charset=utf-8","cache-control":"public, max-age=86400"}});',
  '    if(url.pathname==="/vendor/MarkerCluster.css")return new Response(STATIC_CLUSTER_CSS,{headers:{"content-type":"text/css; charset=utf-8","cache-control":"public, max-age=86400"}});',
  '    if(url.pathname==="/vendor/markercluster-LICENSE.txt")return new Response(STATIC_CLUSTER_LICENSE,{headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=86400"}});',
  '    if(url.pathname==="/gwangsan-dongs.geojson")return new Response(JSON.stringify(STATIC_BOUNDARIES),{headers:{"content-type":"application/geo+json; charset=utf-8","cache-control":"public, max-age=86400"}});',
  '    if(url.pathname==="/"||url.pathname==="/index.html")return new Response(STATIC_HTML,{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-cache"}});',
  '    return new Response("Not found",{status:404});',
].join("\n");
const bundle=staticSource+normalizedWorker.replace(marker,staticHandler);

await rm("dist",{recursive:true,force:true});
await mkdir("dist/server",{recursive:true});
await mkdir("dist/.openai",{recursive:true});
await writeFile("dist/server/index.js",bundle,"utf8");
await copyFile(".openai/hosting.json","dist/.openai/hosting.json");
