'use strict';

var webpack = require('webpack');

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
			}
		]
	},

	devServer: {
		inline: true,
		port: 8080
	}

};
