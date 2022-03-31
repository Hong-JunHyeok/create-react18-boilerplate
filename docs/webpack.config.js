import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import RemarkHTML from "remark-html";
import RemarkFrontmatter from "remark-frontmatter";

export default {
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]?[hash]",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
            options: {
              remarkOptions: {
                plugins: [RemarkFrontmatter, RemarkHTML],
              },
            },
          },
        ],
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
      directory: path.join(path.resolve(), "public"),
    },
    compress: true,
    port: 3080,
  },
};
