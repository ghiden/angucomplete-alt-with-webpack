'use strict';

var webpack = require('webpack');
var path = require('path');
var app = __dirname + '/app';

module.exports = {  
  context: app,
  entry: {
    app: ['webpack/hot/dev-server', './core/bootstrap.js']
  },
  output: {
    path: app,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
