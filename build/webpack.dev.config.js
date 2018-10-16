const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackPlugin = require('./webpack.base.config');

const devWebpackPlugin = merge(baseWebpackPlugin, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        oneOf: [
          {
            include: [path.resolve(__dirname, '../node_modules')],
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
            ],
          },
          {
            include: [path.resolve(__dirname, '../src')],
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                }
              },
              'postcss-loader',
            ],
          }
        ],
      },
      {
        test: /\.less$/,
        oneOf: [
          {
            include: [path.resolve(__dirname, '../node_modules')],
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
                }
              }
            ],
          },
          {
            include: [path.resolve(__dirname, '../src')],
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                }
              },
              'postcss-loader',
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
                }
              }
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.HotModuleReplacementPlugin(),
  ],
});

module.exports = devWebpackPlugin;
