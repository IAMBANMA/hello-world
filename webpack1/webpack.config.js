var webpack = require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
    //devtool: 'eval-source-map',
    entry: './entry.js',
    output: {
        path: __dirname + '/app/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
		
	//	{
      //      test: /\.css$/,
        //    loader: 'style-loader!css-loader?modules'
       // },
		
		{
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
		},
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader'})
			}
		
        ]

    },
    devServer: {
        contentBase: './app',
        inline: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.BannerPlugin('this file is created by xiaoma'),
		new HtmlWebpackPlugin({
			template:__dirname+'/index.tmpl.html'
		}),
		//new webpack.optimize.UglifyJsPlugin({
		//	compress:{
		//		warnings:false
		//	}
		//}),
		new ExtractTextPlugin('[name]-[hash].css')
	
    ]
}
