var path = require('path');
var webpack = require('webpack');

var PATHS = {
	src: path.join(__dirname, '/src'),
	dist: path.join(__dirname, '/dist')
};

module.exports = {

	context: PATHS.src,

	entry: {
		test: 'test.js'
	},

	output: {
		path: PATHS.dist,
		filename: '[name].js'
	},

	resolve: {
		root: path.join( __dirname, '/src'),
    	alias: {
    	}
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node-modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				exclude: /node-modules/,
				loader: 'raw-loader'
			}
		]
	},

	// webpack dev server configuration
	devServer: {
		contentBase: "./src",
    	noInfo: false,
    	hot: true,
    	headers: { "Access-Control-Allow-Origin": "*" }
  	},

  	// support source maps
  	devtool: "#inline-source-map",

  	plugins: [
  		new webpack.HotModuleReplacementPlugin()
  	]
};