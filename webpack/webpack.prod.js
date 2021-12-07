const { merge } = require('webpack-merge');
const common = require('../webpack.common.js');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  entry: {
    main: './src/index.tsx',
    polyfill: '@babel/polyfill',
  },
  mode: 'production',
  output: {
    clean: true,
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserWebpackPlugin()],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
        },
        styles: {
          test: /\.style.(tsx|ts)$/i,
          name: 'styles',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.bundle.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: ['babel-loader'],
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              implementation: require('postcss'),
              postcssOptions: {
                config: path.resolve('./postcss.config.js'),
              },
            },
          },
        ],
      },
    ],
  },
});
