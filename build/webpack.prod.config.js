const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackPlugin = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const prodWebpackPlugin = merge(baseWebpackPlugin, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        include: path.resolve( 'src'),
        sideEffects: false,
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            include: path.resolve('node_modules'),
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
            ],
          },
          {
            include: path.resolve('src'),
            use: [
              MiniCssExtractPlugin.loader,
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
            include: path.resolve('node_modules'),
            use: [
              MiniCssExtractPlugin.loader,
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
            include: path.resolve('src'),
            use: [
              MiniCssExtractPlugin.loader,
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
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
      chunkFilename: '[name]-[contenthash].css',
    }),
  ],
});

module.exports = prodWebpackPlugin;
