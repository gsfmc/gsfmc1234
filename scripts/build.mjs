import {mkdir,rm,readFile,writeFile,copyFile} from "node:fs/promises";

const [html,css,app,worker,stores]=await Promise.all([
  readFile("public/index.html","utf8"),
  readFile("public/styles.css","utf8"),
  readFile("public/app.js","utf8"),
  readFile("src/worker.js","utf8"),
  readFile("data/gwangsan-stores.json","utf8"),
]);
const normalizedWorker=worker.replace(/\r\n/g,"\n").replace("const STATIC_STORES=null;","const STATIC_STORES="+stores.trim()+";");
const marker='    if(env.ASSETS)return env.ASSETS.fetch(request);\n    return new Response("Site assets binding is unavailable.",{status:503});';
if(!normalizedWorker.includes(marker))throw new Error("Static fallback marker is missing.");
const staticSource=[
  "const STATIC_HTML="+JSON.stringify(html)+";",
  "const STATIC_CSS="+JSON.stringify(css)+";",
  "const STATIC_APP="+JSON.stringify(app)+";",
  "",
].join("\n");
const staticHandler=[
  '    if(url.pathname==="/styles.css")return new Response(STATIC_CSS,{headers:{"content-type":"text/css; charset=utf-8","cache-control":"public, max-age=3600"}});',
  '    if(url.pathname==="/app.js")return new Response(STATIC_APP,{headers:{"content-type":"text/javascript; charset=utf-8","cache-control":"public, max-age=3600"}});',
  '    if(url.pathname==="/"||url.pathname==="/index.html")return new Response(STATIC_HTML,{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-cache"}});',
  '    return new Response("Not found",{status:404});',
].join("\n");
const bundle=staticSource+normalizedWorker.replace(marker,staticHandler);

await rm("dist",{recursive:true,force:true});
await mkdir("dist/server",{recursive:true});
await mkdir("dist/.openai",{recursive:true});
await writeFile("dist/server/index.js",bundle,"utf8");
await copyFile(".openai/hosting.json","dist/.openai/hosting.json");
