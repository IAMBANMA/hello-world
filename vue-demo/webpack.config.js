var webpack=require('webpack');
var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports={
	entry:'./src/main.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'bundle.js'
	},
	module:{
		rules:[
			{test:/\.vue$/,loader:'vue-loader'},
			{test:/\.js$/,loader:'babel-loader',exclude:/node_modules/},
			{test:/\.css$/,use:ExtractTextPlugin.extract({use:'css-loader'})},
			{test:/\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,loader:'url-loader'}
		]
	},
	devServer:{
		contentBase:'/dist/'
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'index.html'
		}),
		new ExtractTextPlugin('styles.css')
	],
	resolve:{
		alias:{
			'vue$':'vue/dist/vue.common.js'
		}
	}
}
