//这里采用ES2015的模块可以和下面的require一样正常使用,虽然import/export语句在浏览器中还没有被支持,
//但是webpack会将其替换为ES5兼容的代码.
//import _ from 'lodash';
var _=require('lodash');
var bb=require('backbone');
function component(){
var el=document.createElement('div');
var text=_.join(['hello','webpack'],' ');
el.innerHTML=text;
return el;
};

document.body.appendChild(component());
