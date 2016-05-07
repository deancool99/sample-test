var opn = require('opn');
var webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  webpackConfig = require('../webpack.config.js');
var build = function() {
  var bundleStart = null;
  var compiler = webpack(webpackConfig);

  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  var bundler = new WebpackDevServer(compiler, {
    // publicPath: '/',
    devtool: 'eval',
    contentBase: 'src/',
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  bundler.listen(8083, 'localhost', function() {
    console.log('Bundling project, please wait...');
  });
};
opn('http://localhost:8083');
build();
module.exports = build;
