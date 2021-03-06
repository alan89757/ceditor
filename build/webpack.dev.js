const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/app.jsx",
    // "router": "./src/myRouter/index.jsx"  // 建议hash路由
  },
  mode: "development",
  resolve: {
    extensions:[".js", ".jsx"]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9090,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/template/index.html")
    })
  ]
}