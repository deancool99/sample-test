> React project boilerplate with webpack and ES6!

## What You Get

* react (Support for React v0.12.x and React v0.13.x)
* hot reload feature

## Install
Follow the steps below:

```sh
$ git clone https://git.systex.com/softmobie/fundrich-web.git
$ cd fundrich-web
$ npm install
```
install Global Module
```sh
$ sudo npm install -g webpack
$ sudo npm install -g karma
```

## Development:

```sh
$ npm run dev
```

Your application will be available at [http://localhost:8082](http://localhost:8082).

Whenever you need to add a third party plugins or libraries into common `vendor.js`, access to `package.json` and insert the path or module name into `vendors`.

## Unit Test (hot)

```sh
$ karma start
```

## Production

For MAC/LINUX User

```sh
$ npm run deploy
```

For WINDOWS User

```sh
$ npm run wdeploy
```

Every javascript and assets file will be bundled into `dist` folder.

## UI Guideline
#### 1. 檔案命名規則: 使用小駝峰
  * component
    * Page: xxxPage.js
    * View: xxxView.js

  * actions
    * xxxAction.js

  *  stores
    *  xxxStore.js

#### 2. class命名大駝峰
#### 3. 禁止使用全域變數, 禁用window.xxx..... = ???; 等類似用法, 變數一律加let
#### 4. 不使用jquery
#### 5. 事件控制
#### 6. 使用ES 2015
* 避免重複綁定
* 注意解除綁定的時機

## License
