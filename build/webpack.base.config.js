const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name]-[hash:8].js',
    chunkFilename: '[name]-[chunkhash:8].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_nodules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'url-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot| ttf|otf)$/,
        use: [
          'url-loader',
        ],
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
