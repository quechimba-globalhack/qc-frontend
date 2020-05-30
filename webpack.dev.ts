import path = require("path");

export default {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "./dist"),
    port: 9000,
  }
};
