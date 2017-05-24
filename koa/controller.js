'use strict'
const fs=require('fs');
function addmapping(router,mapping){
for(var url in  mapping){
if(url.startsWith('GET ')){
var path=url.substring(4);
router.get(path,mapping[url])
}else if(url.startsWith('POST ')){
var path=url.substring(5);
router.post(path,mapping[url])
}else{
console.log('无效地址1')
}
}
}

function addcontroller(router,dir){
var files=fs.readdirSync(dir+'/controllers/');
var js_files=files.filter((f)=>{
return f.endsWith('.js');
});
for(var f of js_files){
let mapping=require(dir+'/controllers/'+f);
addmapping(router,mapping);
}

}


module.exports=addcontroller;










