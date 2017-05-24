const Koa=require('koa');
const app=new Koa;
const files=require('./static-files');


app.use(files);
app.listen(8000);
console.log('server is running....')


