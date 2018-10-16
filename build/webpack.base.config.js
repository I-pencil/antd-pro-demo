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
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot| ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        include: path.resolve(__dirname, './node_modules'),
        sideEffects: false,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      }
    ]
  },
  resolve: {
    // extensions: ['.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpackDemo',
      template: './index.html',
      filename: 'index.html',
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest'
    // }),
  ],
}
