const Koa=require('koa');
const app=new Koa;
const bodyparser=require('koa-bodyparser');
const static_files=require('./static-files');
const controller=require('./controller');
const template=require('./templating');
const rest=require('./rest');


app.use(bodyparser());
app.use(static_files);
app.use(rest.restify('/api/'));
app.use(template('views',{watch:true}));
app.use(controller());
app.listen(3000);
console.log('rest server is running....')

