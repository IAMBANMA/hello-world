'use strict'
module.exports={
'GET /hello/:name':async(ctx,next)=>{
var name=ctx.params.name;
ctx.response.body=`hello,${name}`;
}
}









