var path=require('path');
var webpack=require('webpack');


module.exports={
	entry:'./main.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].js'
	},
	module:{
		rules:[
			{
				test:/\.(js|vue)$/,
				loader:'eslint-loader',
				enforce:'pre',
				exclude:/node_modules/
			},
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/
			},
			{
				test:/\.png$/,
				loader:'url-loader',
				options:{
					limit:1000
				}
			}
		]
	}
}
