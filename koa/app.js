'use strict'
const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const controller=require('./controller');
const dir=__dirname;
let staticFiles=require('./static-files');
let template=require('./template');


app.use(bodyparser());
app.use(template('views',{watch:true}));
controller(router,dir);

app.use(router.routes());
app.use(staticFiles('/static/',dir+'/static'));


module.exports=app;
