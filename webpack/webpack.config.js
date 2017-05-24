var webpack=require('webpack');
var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');

var ROOT_PATH=path.resolve(__dirname);
console.log(ROOT_PATH+'\n');
var APP_PATH=path.resolve(ROOT_PATH+'/app/');
console.log(APP_PATH+'\n');
var BULID_PATH=path.resolve(ROOT_PATH+'/build/');
console.log(BULID_PATH+'\n');


module.exports={
entry:APP_PATH,
output:{
path:BULID_PATH,
filename:'bundle.js'
},
plugins:[
new HtmlWebpackPlugin({template:__dirname+'/index.html'})
]
};
