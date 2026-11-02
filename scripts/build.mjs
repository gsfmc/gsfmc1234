import {mkdir,rm,cp,copyFile} from "node:fs/promises";
await rm("dist",{recursive:true,force:true});
await mkdir("dist/client",{recursive:true});
await mkdir("dist/server",{recursive:true});
await cp("public","dist/client",{recursive:true});
await copyFile("src/worker.js","dist/server/index.js");