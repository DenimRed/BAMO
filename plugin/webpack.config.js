const PathModule = require('path');
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	target: 'node',
	entry: './src/main.js',
	output: {
		filename: 'BAMO.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    optimizeSSR: false
                }
            },
			{
				test: /\.css$/,
				use: ['to-string-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	resolve: {
		alias: {
			vue$: "vue/dist/vue.common.js",
		},
		extensions: ["*", ".js", ".vue", ".json"],
	},
}
