const path = require("path");

module.exports = {
  name: "React-18_Boiler-Plate",
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./src/index.jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "app.js",
  },
};
