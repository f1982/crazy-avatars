
## Usage

    $ npm install

    $ min install @minui/wxc-tab
    $ min install @minui/wxc-dialog
    $ min install @minui/wxc-countdown

    $ wepy build --watch

## UnitTest

using Jasmine for unit test

Write tests in below file
folder:
spec/appSpec.js


## MinUI

https://github.com/meili/min-cli

## wux
https://wux-weapp.github.io/

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