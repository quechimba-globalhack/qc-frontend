import { CleanWebpackPlugin } from "clean-webpack-plugin";
import webpack = require("webpack");
import HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
import path = require("path");
import dotenv = require("dotenv");

const env = dotenv.config().parsed;
// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const babelOptions = {
  presets: [
    [
      "@babel/preset-env",
      // {
      //   "useBuiltIns": "entry"
      // }
    ],
  ],
};

export default {
  entry: {
    quechimba: "./src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions,
        },
      },
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptions,
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({...envKeys, 'process.env.HELLO': '1+1'}),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, "public", "manifest.json"),
        path.resolve(__dirname, "public", "favicon.ico"),
        path.resolve(__dirname, "public", "logo192.png"),
        path.resolve(__dirname, "public", "logo512.png"),
        path.resolve(__dirname, "public", "robots.txt"),
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};
