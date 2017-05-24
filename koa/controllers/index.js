module.exports = {
        'GET /': async(ctx, next) => {
                ctx.render('index.html');
	},
	'POST /signin':async(ctx,next)=>{
		var name=ctx.request.body.name||'';
		var password=ctx.request.body.password||'';
		if(password=='12345'){
			ctx.render('home.html',{name:name});
		}else{
			ctx.render('failed.html');
		}
	}
}
