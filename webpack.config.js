const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require("./webpack.base.config");
const { merge } = require("webpack-merge");

module.exports = merge(base, {
	entry: __dirname + "/src/entry-client.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
		publicPath: "/"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/public/index.html",
			inject: "body"
		}),
	],
	module: {
		rules: [
		
		]
	},
	devServer: {
		port: 8080
	}
});