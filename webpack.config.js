const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "React-18_Boiler-Plate",
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3080,
  },
};
