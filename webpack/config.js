require('babel-register');
var fs = require('fs-extra');
var en_US = require('../src/assets/i18n/en_US/exportI18n');
var zh_TW = require('../src/assets/i18n/zh_TW/exportI18n');
var zh_CN = require('../src/assets/i18n/zh_CN/exportI18n');
var version = new Date().getTime();
var languages = {en_US, zh_TW, zh_CN};
var config = {
  version,
  languages
}
fs.outputJsonSync('./config.json', config);
