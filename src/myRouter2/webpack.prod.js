const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    HtmlRouter: "./src/myRouter2/index.js"
  },
  mode: "production",
  resolve: {
    extensions:[".js", ".jsx"]
  },
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname),
    filename: "[name].js",
    library: 'HtmlRouter',
    libraryTarget: 'umd'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./historyRouter.html")
    })
  ]
}