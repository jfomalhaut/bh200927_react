const dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["./src/index.js"],
  plugins: [new dotenv()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          "file-loader?name=img/[name].[ext]?[hash]",
          "image-webpack-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
    port: 3000,
    historyApiFallback: true,
  },
};
