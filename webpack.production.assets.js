require('babel-register');
var Webpack = require('webpack'),
  path = require('path'),
  util = require('util'),
  fs = require('fs-extra'),
  pkg = require('./package.json'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  nodeModulesPath = path.resolve(__dirname, 'node_modules'),
  buildPath = path.resolve(__dirname, 'dist'),
  config = require('./config.json'),
  cssBundleName = util.format('assets/styles.%s.css', config.version),
  jsBundleName = util.format('assets/js/[name].%s.js', config.version),
  I18nPlugin = require("i18n-webpack-plugin"),
  languages = config.languages,
  plugins = function(language) {
    var plugins = [
      new Webpack.DefinePlugin({
        language: JSON.stringify(language),
        languages: JSON.stringify([{
          'text': 'English',
          'value': 'en_US'
        }, {
          'text': 'Simplified Chinese',
          'value': 'zh_CN'
        }, {
          'text': 'Traditional Chinese',
          'value': 'zh_TW'
        }]),
        'process.env': {
          NODE_ENV: JSON.stringify("production"),
          REST: JSON.stringify("uat")
        }
      }),
      new ExtractTextPlugin(cssBundleName, {
        allChunks: true
      }),
      new I18nPlugin(
        languages[language],
        'i18n'
      ),
      new Webpack.optimize.CommonsChunkPlugin('vendors', 'assets/js/vendors.js', Infinity),
      new Webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      // new Webpack.ProvidePlugin({
      //   i18n: 'I18n/' + language + '/i18n'
      // })
    ];
    return plugins;
  },
  entry = (function() {
    var filePath = path.resolve(__dirname, 'src', 'components', 'pages');
    var files = fs.readdirSync(filePath);
    var entry = {
      vendors: ['react','redux','react-dom','react-redux']
    };
    for (var key in files) {
      entry[files[key].replace('.js', '')] = filePath + '/' + files[key];
    }
    return entry;
  })();
module.exports = Object.keys(languages).map(function(language) {
  return {
    name: language,
    // devtool: 'source-map',
    entry: entry,
    output: {
      path: buildPath,
      publicPath: '/',
      filename: util.format('assets/js/%s/[name].%s.js', language, config.version)
    },
    module: {
      // preLoaders: [{
      //   test: /\.js(x)?$/,
      //   loader: 'eslint',
      //   exclude: nodeModulesPath
      // }],
      loaders: [{
        test: /\.js(x)?$/,
        loader: 'babel!webpack-strip?strip[]=console.log',
        exclude: nodeModulesPath
      }, {
        test: /\.html$/,
        loaders: ['html'],
        exclude: nodeModulesPath
      }, {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('css?sourceMap?!sass?sourceMap')
      }, {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url?limit=8192&name=assets/images/[name].[ext]'
      }, {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'url?limit=8192&name=assets/fonts/[name].[ext]'
      }, {
        test: /\.json$/,
        loader: 'json'
      }]
    },
    plugins: plugins(language),
    resolve: {
      extensions: ['', '.js', '.jsx', '.css', '.scss'],
      alias: {
        NodeModules: nodeModulesPath,
        Assets: path.resolve(__dirname, 'src', 'assets'),
        Styles: path.resolve(__dirname, 'src', 'assets', 'styles'),
        Images: path.resolve(__dirname, 'src', 'assets', 'images'),
        Components: path.resolve(__dirname, 'src', 'components'),
        Controls: path.resolve(__dirname, 'src', 'components', 'controls'),
        Modules: path.resolve(__dirname, 'src', 'components', 'modules'),
        Reducers: path.resolve(__dirname, 'src', 'reducers'),
        Stores: path.resolve(__dirname, 'src', 'stores'),
        Actions: path.resolve(__dirname, 'src', 'actions'),
        Constants: path.resolve(__dirname, 'src', 'constants'),
        Core: path.resolve(__dirname, 'src', 'core'),
        I18n: path.resolve(__dirname, 'src', 'assets', 'i18n'),
        FakeData: path.resolve(__dirname, 'src', 'fakeData'),
        Rest: path.resolve(__dirname, 'src', 'core', 'rest.js')
      }
    }
  };
});
