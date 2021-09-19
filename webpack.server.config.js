const {merge} = require('webpack-merge');
const base = require('./webpack.base.config');
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = merge(base,{
	entry: __dirname + "/src/entry-server.js",
	output: {
		path: __dirname + "/dist",
		filename: "server-bundle.js",
		libraryTarget: 'commonjs2',
		publicPath: "/"
	},
	devtool: 'source-map',
	target: "node",
	plugins: [
		new VueSSRServerPlugin(),
	],
	externals: nodeExternals({
		allowlist: /\.css$/
	}),
});