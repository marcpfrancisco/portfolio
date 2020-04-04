const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js",
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
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "./src/components"),
			"@pages": path.resolve(__dirname, "./src/pages"),
		},
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./index.html",
		}),
	],
};
