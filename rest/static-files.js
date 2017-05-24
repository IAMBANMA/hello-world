const fs=require('mz/fs');
const mime=require('mime');

module.exports=async(ctx,next)=>{
  var path=ctx.request.path;
  if(path.startsWith('/static/')){
    ctx.type=mime.lookup(path);
    ctx.body=await fs.readFile(__dirname+path);
  }
  await next();
}
