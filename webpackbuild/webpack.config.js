var path=require('path');
var webpack=require('webpack');

module.exports={
	entry:{
		main:'./app/index.js',
	
	},
	output:{
		filename:'[name]-[chunkhash].js',
		path:path.resolve(__dirname,'dist')
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor',
			minChunks:function(m){
				return m.context&&m.context.indexOf('node_modules')!==-1;
			}
		
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:'manifest'
		})
	]
}
