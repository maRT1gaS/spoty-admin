const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const StylelintPlugin = require('stylelint-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new StylelintPlugin({
      configFile: './.stylelintrc.json',
      extensions: ['css', 'ts'],
      fix: true,
    }),
    new EslintWebpackPlugin({
      extensions: ['ts', 'tsx', 'js'],
      fix: true,
      lintDirtyModulesOnly: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/assets/favicons/',
          to: 'assets/favicons',
        },
      ],
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|git|svg)$/i,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name][hash].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img',
            },
          },
        ],
      },
    ],
  },
};
