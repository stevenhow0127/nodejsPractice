# Node.js 第4天課堂筆記

## 知識點

- Express
- 基於文件做一套 CRUD

## 反饋

- 需要記憶的內容比較多，還是得多敲多練
-  竟以為老師是理工男！！！老師每天來一波驚喜吧，魅力值up up up！
-  老師很可愛，很喜歡，學習有動力，哈哈哈哈哈哈哈哈
  +  嚶嚶嚶
- php什麼的相關知識，老師可能大概也許說過，但是我清楚的知道，我是真的不知道，對我來說就是新知識。恩 所以，你沒有重複
- 給老師點贊
- QAQ
  + @_@

## 複習

- jQuery 的 each 和 原生的 JavaScript 方法 forEach
- 301 和 302 的區別
- 模塊中導出單個成員和導出多個成員的方式
  + `module.exports = xxx`
  + 通過多次：`exports.xxx = xxx`
  + 導出多個也可以：`moudle.exports = {多個成員}`
- module.exports 和 exports 的區別
  + exports 只是 module.exports 的一個引用而已，目的只是為了簡化寫法
  + 每個模塊最終 return 的是 module.exports
- require 方法加載規則
  + 優先從緩存加載
  + 核心模塊
  + 路徑形式的模塊
    * `./xxx`
    * `../xxxx`
    * `/xxxx` / 在這裡表示的是磁盤根路徑
    * `c:/xxx`
  + 第三方模塊
    * 第三方模塊的標識就是第三方模塊的名稱（不可能有第三方模塊和核心模塊的名字一致）
    * npm
      - 開發人員可以把寫好的框架、庫發佈到 npm 上
      - 使用者在使用的時候就可以很方便的通過 npm 來下載
    * 使用方式：`var 名字 = require('npm install 的那個包名')`
    * node_modules
    * node_modules/express
    * node_modules/express/package.json
    * node_modules/express/package.json main
    * 如果 package.json 或者 package.json main 不成立，則查找備選項：index.js
    * 如果以上條件都不成立，則繼續進入上一級目錄中的 node_modules 按照上面的規則繼續查找
    * 如果直到當前文件模塊所屬磁盤根目錄都找不到，最後報錯：`can not find module xxx`
- package.json 包描述文件
  + 就是產品的說明書
  + `dependencies` 屬性，用來保存項目的第三方包依賴項信息
  + 所以建議每個項目都要有且只有一個 package.json (存放在項目的根目錄)
  + 我們可以通過 `npm init [--yes]` 來生成 package.json 文件
  + 同樣的，為了保存依賴項信息，我們每次安裝第三方包的時候都要加上：`--save` 選項。
- npm 常用命令
  + install
  + uninstall
- Express 基本使用
- 使用 Express 把之前的留言本案例自己動手改造一下

### 模塊標識中的 `/` 和文件操作路徑中的 `/`

## 上午總結

### 演講

> 說服
> PPT
> 腦圖
> markdown
> 結構思維

- 找痛點 why 為什麼
- 解決方案 what 是什麼
- 怎麼去使用 how 怎麼用
- where 在哪兒用
- when  什麼時候用

- 文件路徑中的 `/` 和模塊標識中的 `/`
- nodemon
- Express
  + art-template 模板引擎的配置
  + body-parser 解析表單 POST 請求體
- 技術只是一種解決問題的手段、工具而已
  + 第三方的東西，不要糾結
  + 先以解決問題為主
- 詳解了 express 靜態服務 API
  + app.use('/public/', express.static('./public'))
- crud

## 下午總結

## 目標

- 文件路徑中的 `/` 和模塊標識中的 `/`
- Express 中配置使用 art-template 模板引擎
- Express 中配置使用 body-parser
- Express 中配置處理靜態資源
- CRUD 案例中單獨提取路由模塊
