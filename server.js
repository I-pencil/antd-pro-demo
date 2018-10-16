const express = require('express');
const webpack = require('webpack');
const config = require('./build/webpack.dev.config');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.listen(3000, function () {
  console.log('app listening on port 3000 \n');
});
