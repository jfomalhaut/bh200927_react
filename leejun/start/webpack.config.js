module.exports = {
	entry: [
		"./src/index.js"
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclued: /node_module/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx", "*"]
	},
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./dist",
		port: 3000,
		historyApiFalback: true
	}
}