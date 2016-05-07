require('babel-register');
var Webpack = require('webpack'),
  StaticSiteGeneratorPlugin = require('./webpack/plugins/staticSiteGeneratorPlugin'),
  Handlebars = require('handlebars'),
  path = require('path'),
  util = require('util'),
  fs = require('fs-extra'),
  pkg = require('./package.json'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  eslintrcPath = path.resolve(__dirname, '.eslintrc'),
  nodeModulesPath = path.resolve(__dirname, 'node_modules'),
  buildPath = path.resolve(__dirname, 'src'),
  version = pkg.version,
  // cssBundleName = util.format('assets/styles/style.%s.css', version),
  jsBundleName = util.format('assets/js/[name].%s.js', version),
  I18nPlugin = require("i18n-webpack-plugin"),
  languages = {
    // "zh_TW": require("./src/assets/i18n/zh_TW/exportI18n"),
    "en_US": require("./src/assets/i18n/en_US/exportI18n")
  },
  language = Object.keys(languages)[0],
  plugins = (function() {
    var plugins = [
      new Webpack.HotModuleReplacementPlugin(),
      new Webpack.NoErrorsPlugin(),
      // new ExtractTextPlugin(cssBundleName, {
      //   allChunks: true
      // }),
      new I18nPlugin(
        languages[language],
        'i18n'
      ),
      new Webpack.optimize.CommonsChunkPlugin('vendors', 'assets/js/vendors.js', Infinity),
      // new Webpack.ProvidePlugin({
      //   i18n: 'I18n/' + language + '/i18n'
      // }),
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
          NODE_ENV: JSON.stringify("dev"),
          REST: JSON.stringify("dev")
        }
      })
    ];
    var folderPath = path.resolve(__dirname, 'src', 'templates');
    var files = fs.readdirSync(folderPath);
    for (var key in files) {
      var filename = files[key].replace('.html', '');
      var filepath = path.join(folderPath, files[key]);
      var jsSrc = util.format('assets/js/%s.%s.js', filename, version);
      var cssSrc = '/assets/styles/style.' + version + '.css';
      var template = Handlebars.compile(fs.readFileSync(filepath).toString());
      var opts = {
        css: [],
        js: ['/assets/js/vendors.js','/' + jsSrc],
        title: filename,
        language: language
      };
      var pageInfo = {
        html: template(opts)
      };
      plugins.push(
        new StaticSiteGeneratorPlugin(jsSrc, [{
          path: '/not-found',
          output: language + '/' + files[key]
        }], pageInfo)
      );
    }
    plugins.push(
    new StaticSiteGeneratorPlugin('index', [{
      path: '/',
      output: 'index.html'
    }], {
      html: Handlebars.compile(fs.readFileSync(path.resolve(__dirname, 'src', 'index.html')).toString())({
        css: [],
        js: [],
        title: 'index',
        language: language
      })
    }));
    return plugins;
  })(),
  entry = (function() {
    var filePath = path.resolve(__dirname, 'src', 'components', 'pages');
    var files = fs.readdirSync(filePath);
    var entry = {
      vendors: ['react','redux','react-dom','react-redux']
    };
    for (var key in files) {
      entry[files[key].replace('.js', '')] = [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8083',
        filePath + '/' + files[key]
      ];
    }
    return entry;
  })();

var config = {
  devtool: 'eval',
  watch: true,
  entry: entry,
  output: {
    path: buildPath,
    filename: jsBundleName,
    publicPath: '/',
    libraryTarget: 'umd'
  },
  module: {
    preLoaders: [{
      test: /\.js(x)?$/,
      loader: 'eslint',
      exclude: nodeModulesPath
    }],
    loaders: [{
      test: /\.js(x)?$/,
      loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
      exclude: nodeModulesPath
    }, {
      test: /\.html$/,
      loaders: ['html'],
      exclude: nodeModulesPath
    }, {
      test: /\.(css|scss)$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: 'url?limit=16384'
    }, {
      test: /\.(woff|woff2|ttf|eot)$/,
      loader: 'url'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  plugins: plugins,
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
  },
  eslint: {
    configFile: eslintrcPath
  }
};

module.exports = config;
