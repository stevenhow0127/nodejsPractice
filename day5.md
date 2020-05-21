# Node.js 第5天課堂筆記

## 知識點

- Express
- MongoDB
- 項目
  + 一天半的時間

## 反饋

-  新版sublime 怎麼格式化 怎麼一起選中長度不等的內容 怎麼改顏色 有的寫對了也沒顏色 仍然是白色
  +  HTML-CSS-JS Prettify
-  代碼量好多
  +  真正的開發是咱們這個小案例的無數倍
-  callback是不是相當於函數自調用?
  +  很簡單，函數也是一種數據類型，既可以當作參數進行傳遞，也可以當作方法的返回值
- 我們現在用的模塊化是CMD吧 老師能不能給我們擴展一下AMD
  + PHP 中為什麼就可以直接 `require`、`include` 因為 PHP 當初在設計的時候就加入了這個功能
  + PHP 這門語言天生就支持
  + 模塊作用域
  + 可以使用 API 來進行文件與文件之間的依賴加載
  + 在 Node 這個環境中對 JavaScript 進行了特殊的模塊化支持 CommonJS
  + JavaScript 天生不支持模塊化
    * require
    * exports
    * Node.js 才有的
  + 在瀏覽器中也可以像在 Node 中的模塊一樣來進行編程
    * `<script>` 標籤來引用加載，而且你還必須考慮加載的順序問題
    * require.js 第三方庫 AMD
    * sea.js     第三方庫 CMD
  + 無論是 CommonJS、AMD、CMD、UMD、EcmaScript 6 Modules 官方規範
    * 都是為了解決 JavaScript 的模塊化問題
    * CommonJS、AMD、CMD 都是民間搞出來的
    * EcmaScript 是官方規範定義
    * 官方看民間都在亂搞，開發人員為了在不同的環境使用不同的 JavaScript 模塊化解決方案
    * 所以 EcmaScript 在 2015 年發佈了 EcmaScript 2016 官方標準
    * 其中就包含了官方對 JavaScript 模塊化的支持
    * 也就是說語言天生就支持了
    * 但是雖然標準已經發布了，但是很多 JavaScript 運行換將還不支持
    * Node 也是隻在 8.5 版本之後才對 EcmaScript 6 module 進行了支持
    * 後面學 Vue 的時候會去學習
    * less 編譯器 > css
    * EcmaScript 6 -> 編譯器 -> EcmaScript 5
    * 目前的前端情況都是使用很多新技術，然後利用編譯器工具打包可以在低版本瀏覽器運行。
    * 使用新技術的目的就是為了提高效率，增加可維護性
-  內心極度脆弱。。。有心殺敵 無力迴天，總感覺時間不夠用。
  +  不要猥瑣發育，就得浪
- 雖然比較多 但是因為老師講的很清晰 還是願意去寫的 對於 node.js 的奧義 封裝異步的API 就是需要多練
- 老師講的很清晰 講課也很灑脫 老師是不是被誇的已經習慣了 後面講的回掉函數有點懵了
- 老師講的很好，思路清晰，項目跟著老師的筆記一步一步敲，so easy
-  覺得老師講課真的超級棒啊 傳智的實力擔當 雙擊沒毛病 老鐵666
- 都坐下 基本操作 哇,老師,一般敢說這句話的都是大神,我還是個菜鳥,學的那是一臉懵逼
-  有點懵，看著老師的思路做，可是還是不知道從何入手，唉。。。
  +  本著達芬奇畫雞蛋的精神
  +  《使徒行者》三哥
  +  《反黑》陳小春
    *  臥底 8年臥底
    *  文職工作
    *  報了電腦版
    *  吃飯都在看書
    *  學習 -》吃飯也是看書
    *  邊角餘料
- var router = require('./router') 這一步不是加載router.js並執行該文件嗎 為什麼還要執行app.use(router) app.use 不是開放靜態資源嗎 app.use(router)在這裡是什麼意思，掛載到 app 服務中的意思是？ module.exports = app 也不懂
  + 這裡涉及到一箇中間件的概念
  + app.use 不僅僅是用來處理靜態資源的
  + 還可以做很多工作
  + 配置 body-parse 也是通過 app.use 來配置的
  + 這叫中間件，其中有一套規則
- npm init --yes 生成一個package.json 文件 npm --save 文件名 又生成一個package-lock.json文件,又生成的文件和初始化生成的文件有區別嗎?
  + 當你安裝包的時候，新版的 npm 還會自動生成一個文件：package-lock.json
-  早上聽的還可以，下午感覺一頭蒙，還好老師講了晚上自己做案例的具體步驟，不然感覺無從下手，還是反饋多一點好，還可以回顧回顧，不然感覺老師一天講的知識太多了，消化不了，嚶嚶嚶~~~
- 其實拖堂的效率也不高啊。。可能是我天資愚笨
  + 對自己有信息
  + 擼起袖子加油幹、一張藍圖繪到底
-  老師你好，每節課的事件有點長，上課時間長注意力就容易模糊。聽課效率確實有問題，有時候同桌都快憋不住了，為了不丟下知識點，依舊在憋著，好擔心...
- 為什麼模板引擎在app.js中引入之後在router.js中不引入可以直接使用，而express還需要在router.js中再引入一次 app.js中路由器掛載不是很懂 router.js中為什麼要創建一個路由器容器，不知道作用是幹什麼的 es6中的find方法不是很懂
  + 中間件
  + EcmaScript 6 的 find 方法
- 老師，你後來講的回調函數那裡，關於增刪改查案例一個已經夠嗆了，你竟然在最後都講完了； 雖然增刪改查文件的操作在php之前講過，但是真的忘了，而且php學的也不好； 還有：對於php是世界上最好的語言，我持懷疑態度，覺得它是世界上最難理解的語言； 誒！苦惱！又來了一個node，知道後邊的boss都很難應付，比如什麼angular、react和vue，現在其實也做好了心理準備！ 來者不拒吧！看來這一個月註定是一個煎熬的日子！
  + PHP 是世界上最好的語言（貶義）
  + 一切我抗
- 在express框架中怎麼判斷訪問頁面不存在的情況？

## 複習

- 文件路徑中的 `/` 和模塊標識中的 `/`
- Express 中配置使用 art-template 模板引擎
- Express 中配置使用 body-parser
- Express 中配置處理靜態資源
- CRUD 案例中單獨提取路由模塊

## 上午總結

- 回調函數
  + 異步編程
  + 如果需要得到一個函數內部異步操作的結果，這是時候必須通過回調函數來獲取
  + 在調用的位置傳遞一個函數進來
  + 在封裝的函數內部調用傳遞進來的函數
- find、findIndex、forEach
  + 數組的遍歷方法，都是對函數作為參數一種運用
    + every
  + some
  + includes
  + map
  + reduce
- package-lock.json 文件的作用
  + 下載速度快了
  + 鎖定版本
- JavaScript 模塊化
  + Node 中的 CommonJS
  + 瀏覽器中的
    * AMD require.js
    * CMD sea.js
  + EcmaScript 官方在 EcmaScript 6 中增加了官方支持
  + EcmaScript 6
  + 後面我們會學，編譯工具
- MongoDB 數據庫
  + MongoDB 的數據存儲結構
    * 數據庫
    * 集合（表）
    * 文檔（表記錄）
- MongoDB 官方有一個 mongodb 的包可以用來操作 MongoDB 數據庫
  + 這個確實和強大，但是比較原始，麻煩，所以咱們不使用它
- mongoose
  + 真正在公司進行開發，使用的是 mongoose 這個第三方包
  + 它是基於 MongoDB 官方的 mongodb 包進一步做了封裝
  + 可以提高開發效率
  + 讓你操作 MongoDB 數據庫更方便
- 掌握使用 mongoose 對數據集合進行基本的 CRUD
- 把之前的 crud 案例改為了 MongoDB 數據庫版本
- 使用 Node 操作 mysql 數據庫

## 下午總結

## 目標
