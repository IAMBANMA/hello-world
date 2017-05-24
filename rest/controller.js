const fs=require('mz/fs');
const router=require('koa-router')();

module.exports=function(){
  var files=fs.readdirSync(__dirname+'/controllers/');
  var js_files=files.filter(function(f){return f.endsWith('.js')});
  for(let f of js_files){
    var mapping=require(__dirname+'/controllers/'+f);
    for(let url in mapping){
      if(url=='GET /'){
        router.get(url.substring(4),mapping[url]);
      }else if(url=='GET /api/products'){
          router.get(url.substring(4),mapping[url]);
      }else if(url.startsWith('POST ')){
          router.post(url.substring(5),mapping[url]);
      }else if(url.startsWith('DELETE ')){
          router.delete(url.substring(7),mapping[url]);
      }else{
        console.log('your address is wrong...')
      }
    }
  } 



  return router.routes();
}
