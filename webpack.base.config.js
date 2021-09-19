const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
	plugins: [
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.(scss|css)$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							additionalData: `
								@import 'normalize.css';
							`
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', ".vue"],
		alias: {
			"@": __dirname + "/src"
		}
	}
}