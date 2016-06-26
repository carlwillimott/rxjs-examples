'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	output: {
		publicPath: '/',
		filename: 'bundle.js'
	},

	debug: true,
	devtool: 'source-map',

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// {
			// 	test: /\.css$/,
			// 	loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			// }
		]
	},

	// plugins: [
	// 	new ExtractTextPlugin('src/screen.css', {
	// 		allChunks: true
	// 	})
	// ],

	devServer: {
		inline: true,
		port: 8080
	}

};
