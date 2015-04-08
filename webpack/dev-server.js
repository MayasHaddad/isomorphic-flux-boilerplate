'use strict';

require('babel/register');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./dev.config');

var serverOptions = {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    assets: true,
    colors: true,
    version: false,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false
  }
};

var compiler = webpack(config);
var devServer = new WebpackDevServer(compiler, serverOptions);

devServer.listen(3001, 'localhost', function () {
  console.log('devServer started on http://localhost:3001');
});
