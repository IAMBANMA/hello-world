const nunjucks=require('nunjucks');

function createEnv(path,opts){
  var autoescape=opts.autoescape&&true,
      noCache=opts.noCache||false,
      watch=opts.watch||false,
      throwOnUndefined=opts.throwOnUndefined||false,
      env=new nunjucks.Environment(new nunjucks.FileSystemLoader(path,{noCache:noCache,watch:watch}),{autoescape:autoescape,throwOnUndefiend:throwOnUndefined});
      if(opts.filters){
        for(var f in opts.filters){
          env.addFilter(f,opts.filters[f]);
        }
      }
      return env;
}

module.exports=function(path,opts){
  var env=createEnv(path,opts);
  return async(ctx,next)=>{
    ctx.render=(view,model)=>{
      ctx.body=env.render(view,Object.assign({},ctx.state||{},model||{}));
      ctx.type='text/html';
    }
    await next();
  }
}

