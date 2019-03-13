const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const join = _path => path.join('static', _path);

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'static/js/[name]-[hash:8].js',
    chunkFilename: 'static/js/[name]-[chunkhash:8].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: join('img/[name].[hash:8].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: join('media/[name].[hash:8].[ext]'),
        },
      },
      {
        test: /\.(woff|woff2|eot| ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: join('fonts/[name].[hash:8].[ext]'),
        },
      },
      {
        include: path.resolve(__dirname, './node_modules'),
        sideEffects: false,
      },
      {
        test: /\.js$/,
        include: path.resolve('src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      favicon: path.resolve(__dirname, '../favicon.png'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
