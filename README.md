
## Usage

    $ npm install

    $ min install @minui/wxc-tab
    $ min install @minui/wxc-dialog
    $ min install @minui/wxc-countdown
    $ min install @minui/wxc-loadmore

    $ wepy build --watch

## UnitTest

using Jasmine for unit test

Write tests in below file
folder:
spec/appSpec.js

TODO: change to use mocha for test

## MinUI

https://github.com/meili/min-cli

## wux
https://wux-weapp.github.io/
## WEPY 主页
https://tencent.github.io/wepy/
## WEPY API 文档
https://tencent.github.io/wepy/document.html#/api



## CSS compiler

//安装sass
npm i node-sass
//安装wepy-compiler-sass插件
npm install wepy-compiler-sass --save-dev

//配置wepy.config.js
module.exports = {
    "compilers": {
        sass: {
            'outputStyle': 'compressed'
        }
    }
};

### 全局 scss 设置和引入
定义在 styles/global.scss 文件

在任何需要引入全局变量的 wepy 文件里加入 

@import '../styles/global.scss'; //注意路径

## 接口生成规则

### fake api
http://rap2.taobao.org/

### mock doc

http://rapapi.org/workspace/myWorkspace.do?projectId=2348#13802

### rules

A typical rule for mock
{
  "code|0": 0,
  "msg|1": "@WORD",
  "data|10-20": [
    {
      "name": "@FIRST @LAST",
      "email": "@EMAIL",
      "img": "@IMG(200x200)",
      "date": "@DATE",
      "desc|1-2": "@SENTENCE",
      "checked|1-2": true,
      "rate|1-5": "★"
    }
  ]
}