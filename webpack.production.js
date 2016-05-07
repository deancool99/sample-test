require('babel-register');
var Webpack = require('webpack'),
  StaticSiteGeneratorPlugin = require('static-render-webpack-plugin'),
  minify = require('html-minifier').minify,
  Handlebars = require('handlebars'),
  path = require('path'),
  util = require('util'),
  Server = require('react-dom/server'),
  fs = require('fs-extra'),
  pkg = require('./package.json'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  eslintrcPath = path.resolve(__dirname, '.eslintrc'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  nodeModulesPath = path.resolve(__dirname, 'node_modules'),
  buildPath = path.resolve(__dirname, 'dist'),
  now = new Date(),
  version = now.getTime(),
  cssBundleName = util.format('assets/styles/[name].%s.css', version),
  jsBundleName = util.format('assets/js/[name].%s.js', version),
  I18nPlugin = require("i18n-webpack-plugin"),
  languages = {
    "en_US": require("./src/assets/i18n/en_US/exportI18n"),
    // "zh_TW": require("./src/assets/i18n/zh_TW/exportI18n"),
    // "zh_CN": require("./src/assets/i18n/zh_CN/exportI18n")
  },
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
      // new Webpack.optimize.CommonsChunkPlugin('vendors', 'assets/js/vendors.js', Infinity),
      new Webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new Webpack.ProvidePlugin({
        i18n: 'I18n/' + language + '/i18n'
      })
    ];
    var folderPath = path.resolve(__dirname, 'src', 'templates');
    var files = fs.readdirSync(folderPath);
    for (var key in files) {
      var filename = files[key].replace('.html', '');
      var filepath = path.join(folderPath, files[key]);
      var jsSrc = 'assets/js/' + language + '/' + filename + '.' + version + '.js';
      var cssSrc = '/assets/styles/' + filename + '.' + version + '.css';
      var template = Handlebars.compile(fs.readFileSync(filepath).toString());
      var opts = {
        css: [cssSrc],
        js: ['/' + jsSrc],
        title: filename,
        language: language
      };
      var pageInfo = {
        html: minify(template(opts), {
          removeAttributeQuotes: true,
          minifyJS: true,
          collapseWhitespace: true,
          useShortDoctype: true
        })
      };
      plugins.push(
        new StaticSiteGeneratorPlugin(jsSrc, [{
          path: '/not-found',
          output: '/' + language + '/' + files[key]
        }], pageInfo)
      );
    }
    // plugins.push(new HtmlWebpackPlugin({
    //   title: pkg.name,
    //   filename: 'index.html',
    //   pagename: 'index',
    //   language: language,
    //   template: path.resolve(__dirname, 'src', 'index.html'),
    //   languages: languages,
    //   minify: {
    //     removeAttributeQuotes: true,
    //     minifyJS: true,
    //     collapseWhitespace: true,
    //     useShortDoctype: true
    //   }
    // }));
    return plugins;
  },
  entry = (function() {
    var filePath = path.resolve(__dirname, 'src', 'components', 'pages');
    var files = fs.readdirSync(filePath);
    var entry = {
      // vendors: ['react']
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
      filename: util.format('assets/js/%s/[name].%s.js', language, version),
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
    // eslint: {
    //   configFile: eslintrcPath
    // }
  };
});
