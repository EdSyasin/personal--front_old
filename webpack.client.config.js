const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const {merge} = require('webpack-merge');
const base = require('./webpack.base.config');

module.exports = merge(base, {
	entry: __dirname + "/src/entry-client.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
		publicPath: "/"
	},
	plugins: [
		new VueSSRClientPlugin()
	],
});