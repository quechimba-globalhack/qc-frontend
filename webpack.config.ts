import baseConfig from "./webpack.common";
import prodConfig from "./webpack.prod";
import devConfig from "./webpack.dev";
import merge = require("webpack-merge");
import webpack = require("webpack");

const isProduction = (env): boolean => !!env.production;

module.exports = (env = {}): webpack.Configuration => {
  if (isProduction(env)) {
    return merge(baseConfig, prodConfig);
  } else {
    return merge(devConfig, baseConfig);
  }
};
