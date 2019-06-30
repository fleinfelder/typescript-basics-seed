const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/app.ts"),
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }]
  },
  devtool: "source-map",
  mode: "development",
  devServer: {
    port: 3000
  }
};
