const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const baseWebpackPlugin = require('./webpack.base.config');


const prodWebpackPlugin = merge(baseWebpackPlugin, {
  mode: 'production',
  devtool: 'nosources-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_nodules[\\/]/,
          priority: -10,
        },
      },
    },
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        include: path.resolve('src'),
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
                },
              },
              'postcss-loader',
            ],
          },
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
                },
              },
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
                },
              },
              'postcss-loader',
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
          drop_console: true,
        },
      },
    }),
    new OptimizeCssAssetsPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name]-[contenthash].css',
      chunkFilename: 'static/css/[name]-[contenthash].css',
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
});

if (process.env.npm_config_report) {
  /* eslint-disable */
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  prodWebpackPlugin.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = prodWebpackPlugin;
