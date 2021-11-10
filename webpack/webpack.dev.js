const { merge } = require('webpack-merge');
const path = require('path');
const common = require('../webpack.common.js');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  entry: ['@babel/polyfill', './src/index.tsx'],
  mode: 'development',
  ignoreWarnings: [(warning) => true],
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    port: 8000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },
    compress: false,
  },
  plugins: [new ForkTsCheckerWebpackPlugin(), new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts)$/i,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(tsx)$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-refresh/babel'],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
});
