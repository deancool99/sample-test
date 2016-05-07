// Karma configuration
// Generated on Wed Sep 16 2015 12:58:51 GMT+0800 (CST)
var path = require('path');
var Webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var I18nPlugin = require("i18n-webpack-plugin");
var RewireWebpack = require('rewire-webpack');
var languages = {
  "en_US": require("./src/assets/i18n/en_US/i18n.json")
};
var language = Object.keys(languages)[0];
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // 监听文件变化，重新运行测试
    files: [
      // included: false 为不包含这些文件到浏览器中
      // {
      //   pattern: 'src/*.js',
      //   included: false
      // }, {
      //   pattern: 'src/*.less',
      //   included: false
      // }, {
      //   pattern: 'test/specs/**/*.js',
      //   included: false
      // },
      nodeModulesPath + '/phantomjs-polyfill/bind-polyfill.js',
      'test/main.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/main.js': ['webpack']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader'
        }, {
          test: /\.less$/,
          loader: "style!css!less"
        }, {
          test: /\.(css|scss)$/,
          loaders: ['style', 'css', 'sass']
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
      resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss'],
        alias: {
          NodeModules: nodeModulesPath,
          Assets: path.resolve(__dirname, 'src', 'assets'),
          Styles: path.resolve(__dirname, 'src', 'assets', 'styles'),
          Images: path.resolve(__dirname, 'src', 'assets', 'images'),
          Components: path.resolve(__dirname, 'src', 'components'),
          Controls: path.resolve(__dirname, 'src', 'components', 'controls'),
          Dispatcher: path.resolve(__dirname, 'src', 'dispatcher'),
          Stores: path.resolve(__dirname, 'src', 'stores'),
          Actions: path.resolve(__dirname, 'src', 'actions'),
          Constants: path.resolve(__dirname, 'src', 'constants'),
          Core: path.resolve(__dirname, 'src', 'core'),
          I18n: path.resolve(__dirname, 'src', 'assets', 'i18n')
        }
      },
      plugins: [
        new Webpack.DefinePlugin({
          language: JSON.stringify(language)
        }),
        new RewireWebpack(),
        new I18nPlugin(
          languages[language],
          'i18n'
        ),
        new Webpack.ProvidePlugin({
          i18n: 'I18n/' + language + '/i18n'
        })
      ]
    },
    webpackMiddleware: {
      noInfo: true,
      devtool: "#inline-source-map"
    },
    plugins: [
      require("karma-webpack"),
      require('rewire'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher')
    ],
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome'],
    // browsers: ['PhantomJS', 'PhantomJS_custom'],
    browsers: ['PhantomJS_custom'],

    // you can define custom flags
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
