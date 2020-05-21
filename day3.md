# Node.js 第3天課堂筆記

## 知識點

- 增刪改查
- 登陸
- 註冊
- 頭像
  + 服務端圖片
  + 水印
  + 圖片水印
- 找回密碼
- 密碼修改

- 模塊系統
  + 核心模塊
  + 第三方模塊
  + 自己寫的模塊
  + 加載規則以及加載機制
  + 循環加載
- npm
- package.json
- Express
  + 第三方 Web 開發框架
  + 高度封裝了 http 模塊
  + 更加專注於業務，而非底層細節
  + 知其所以然
- 增刪改查
  + 使用文件來保存數據（鍛鍊異步編碼）
- MongoDB
  + （所有方法都封裝好了）

## 反饋

-  希望老師再推薦一些前端學習的書籍，謝謝！
  +  《JavaScript 高級編程》第3班
  +  學習，解決問題
  +  書本可以更好的系統的整理學過的內容，瞭解一些細節
  +  《JavaScript 語言精粹》
- seo的資料，嘿嘿
  + 網站運營 SEO
  + SEO 運營專員
  + 百度、Google、搜狗、
- 最後老師那個怎麼做案例的步驟真的是很有用 覺得今天的反饋 大概又是誇老師的比較多 老師聲音很有特點
- 老師講的很仔細,雖然語速有點快但是會重複很多遍,即使第一遍沒聽會第二遍第三遍也懂了.很好.
-  使用markdown一次只能打開一個文件,不知道怎麼建文件夾，是需要安插件嗎?
-  老師，軟件版本的升級是以什麼作為理論支持的，為什麼跳躍間隙可以這麼大？還有，看上了老師的電子圖書館，瞬間好愛學習呀，真的！
  +  軟件開發版本里面涉及到軟件工程學： 
  +  x.x.x
    *  0.0.1
    *  0.0.2
    *  1.1.5
    *  1.9.2
    *  2（新增功能比較多，甚至可能去除了某些功能）.5(加入了新功能).0（修復bug，提升性能）
    *  大版本
    *  一般是這些客戶端軟件、技術框架開發者比較理解的多
    *  做網站很少涉及到版本的概念，網站的目的就是快
- art-template裡面用的語法是jQuery嗎， each什麼的 我暈了 each,forEach, 遍歷的全混了
  + art-template 和 jQuery 一毛錢關係都沒有
  + each 是 art-template 的模板語法，專屬的
  + {{each 數組}}
  + <li>{{ $value }}</li>
  + {{/each}} 這是 art-template 模板引擎支持的語法，只能在模板字符串中使用
  + $.each(數組, function)
  + $('div').each(function) 一般用於遍歷 jQuery 選擇器選擇到的偽數組實例對象
  + forEach 是 EcmaScript 5 中的一個數組遍歷函數，是 JavaScript 原生支持的遍歷方法 可以遍歷任何可以被遍歷的成員
  + jQuery 的 each 方法和 forEach 幾乎一致
  + 由於 forEach 是 EcmaScript 5 中的，所以低版本瀏覽器不支持
- 每一次的複習賊重要 老師很不錯 我喜歡
- 在以後的工作中 用到node.js的地方多嗎？ 在留言本的案例中 點擊發表留言跳轉頁面的路徑是url路徑 和之前寫的頁面跳轉寫的文件路徑還是有點分不清。
  + 技多不壓身
  + Node 對於前端來講是進階高級前端開發工程師必備的技能
  + 屌絲最容易逆襲的職業
  + 見得東西多了你就不怕了
  + 為所欲為
-  老師講的挺清晰的 可是第一節太困了 路徑有點沒轉變過來
- 如果從a中調用b中的數據，又從b中調用a中的數據，執行a代碼，為什麼把b中的執行完後才會執行a，而不是在b調用a的時候a中的代碼繼續執行
  + a 加載了 b
    * 執行 b 中的代碼
    * 同時得到 b 中導出的接口對象：exports
    * 執行 b 的過程中發現 b 也在 require a
    * b 就會反過來執行 a
    * a 中又加載 b
    * b 又反過來加載 a
    * 這就是循環加載
    * 如果你一旦出現了這種情況，說明你的思路有問題。
    * jQuery.js （可能不可能出現 jQuery 依賴了 main）
    * main.js 依賴了 jQuery
    * 這個問題是矛盾。
  + b 中也加載了 a
  + 
  + 網頁中所有的路徑其實都是 url 路徑，不是文件路徑
- 問題就是不知道問題是什麼,寫案例的時候似懂非懂
- 感覺思維有點跟不上,

## 複習

- 網站開發模型
  + 黑盒子、啞巴
  + 寫代碼讓它變得更智能
  + 按照你設計好的套路供用戶使用

- 在 Node 中使用 art-template 模板引擎
  + 安裝
  + 加載
  + template.render()
- 客戶端渲染和服務端渲染的區別
  + 最少兩次請求，發起 ajax 在客戶端使用模板引擎渲染
  + 客戶端拿到的就是服務端已經渲染好的
- 處理留言本案例首頁數據列表渲染展示
- 處理留言本案例發表留言功能
  + 路徑
  + 設計好的請求路徑
  + $GET 直接或查詢字符串數據
  + Node 中需要咱們自己動手來解析
    * url.parse()
  + /pinglun?name=jack&message=hello
  + split('?')
  + name=jack&message=hello
  + split('&')
  + name=jack message=hello
  + forEach()
  + name=jack.split('=')
  + 0 key
  + 1 value
- 掌握如何解析請求路徑中的查詢字符串
  + url.parse()
- 如何在 Node 中實現服務器重定向
  + header('location')
    * 301 永久重定向 瀏覽器會記住
      - a.com b.com
      - a 瀏覽器不會請求 a 了
      - 直接去跳到 b 了
    * 302 臨時重定向 瀏覽器不記憶
      - a.com b.com
      - a.com 還會請求 a
      - a 告訴瀏覽器你往 b
- Node 中的 Console（REPL）使用

## 上午總結

- jQuery 的 each 和 原生的 JavaScript 方法 forEach
  + EcmaScript 5 提供的
    * 不兼容 IE 8
  + jQuery 的 each 由 jQuery 這個第三方庫提供
    * jQuery 2 以下的版本是兼容 IE 8 的
    * 它的 each 方法主要用來遍歷 jQuery 實例對象（偽數組）
    * 同時它也可以作為低版本瀏覽器中 forEach 替代品
    * jQuery 的實例對象不能使用 forEach 方法，如果想要使用必須轉為數組才可以使用
    * `[].slice.call(jQuery實例對象)`
- 模塊中導出多個成員和導出單個成員
- 301 和 302 狀態碼區別
  + 301 永久重定向，瀏覽器會記住
  + 302 臨時重定向
- exports 和 module.exports 的區別
  + 每個模塊中都有一個 module 對象
  + module 對象中有一個 exports 對象
  + 我們可以把需要導出的成員都掛載到 module.exports 接口對象中
  + 也就是：`moudle.exports.xxx = xxx` 的方式
  + 但是每次都 `moudle.exports.xxx = xxx` 很麻煩，點兒的太多了
  + 所以 Node 為了你方便，同時在每一個模塊中都提供了一個成員叫：`exports`
  + `exports === module.exports` 結果為  `true`s
  + 所以對於：`moudle.exports.xxx = xxx` 的方式 完全可以：`expots.xxx = xxx`
  + 當一個模塊需要導出單個成員的時候，這個時候必須使用：`module.exports = xxx` 的方式
  + 不要使用 `exports = xxx` 不管用
  + 因為每個模塊最終向外 `return` 的是 `module.exports`
  + 而 `exports` 只是 `module.exports` 的一個引用
  + 所以即便你為 `exports = xx` 重新賦值，也不會影響 `module.exports`
  + 但是有一種賦值方式比較特殊：`exports = module.exports` 這個用來重新建立引用關係的
  + 之所以讓大家明白這個道理，是希望可以更靈活的去用它
- Node 是一個比肩 Java、PHP 的一個平臺
  + JavaScript 既能寫前端也能寫服務端

```javascript
moudle.exports = {
  a: 123
}

// 重新建立 exports 和 module.exports 之間的引用關係
exports = module.exports

exports.foo = 'bar'
```

```javascript
Array.prototype.mySlice = function () {
  var start = 0
  var end = this.length
  if (arguments.length === 1) {
    start = arguments[0]
  } else if (arguments.length === 2) {
    start = arguments[0]
    end = arguments[1]
  }
  var tmp = []
  for (var i = start; i < end; i++) {
    // fakeArr[0]
    // fakeArr[1]
    // fakeArr[2]
    tmp.push(this[i])
  }
  return tmp
}

var fakeArr = {
  0: 'abc',
  1: 'efg',
  2: 'haha',
  length: 3
}

// 所以你就得到了真正的數組。 
[].mySlice.call(fakeArr)
```

## 下午總結

- jQuery 的 each 和 原生的 JavaScript 方法 forEach
- 301 和 302 的區別
- 模塊中導出單個成員和導出多個成員的方式
- module.exports 和 exports 的區別
- require 方法加載規則
  + 優先從緩存加載
  + 核心模塊
  + 路徑形式的模塊
  + 第三方模塊
    * node_modules
- package.json 包描述文件
  + dependencies 選項的作用
- npm 常用命令
- Express 基本使用

- 使用 Express 把之前的留言本案例自己動手改造一下
