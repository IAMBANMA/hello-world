module.exports={
  restify:(pathPrefix)=>{
    pathPrefix=pathPrefix||'/api/';
    return async (ctx,next)=>{
      if(ctx.request.path.startsWith(pathPrefix)){
        ctx.rest=(data)=>{
	  ctx.type='application/json';
	  ctx.body=data;
	}
      }
      await next();
    }
  }
}
