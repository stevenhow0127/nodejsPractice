# Node.js 第7天課堂筆記

## 知識點

- 上午
  + 多人社區案例
  + Express 中間件
- 下午
  + Vue

---

## 反饋

```javascript
funtion extend (source, target) {
  for (var key in source) {
    target[key] = source[key]
  }
}

var obj1 = {
  foo: 'bar'
}

var obj2 = {
  name: 'Jack'
}

// obj2 就擁有了 obj1 的所有成員了
extend(obj1, obj2)
```

-  唉............
- 老師我想問下 那個操作文件路徑不受打開命令執行node命令所屬路徑影響什麼意思，是可以在任意窗口打開都可以訪問到嗎。。。。。
- 慢點 心急吃不了熱豆腐
-  老師講的很好 很清晰 希望老師下午第一節上課時間短點 第一節很困 上課時間太長聽課效率有點低
-  老師 寫案例的時候 一個文件的代碼量多了 可不可以把字體稍微調小點便於看全局結構 有時候感覺自己連不上
- extend還不是很理解
  + 模板繼承
  + extend 把複製過來
  + layout
  + index （extend layout）
  + index 就具有了 layout 的內容
  + index 還可以有自己的自定義內容
- 能不能把命令系統地羅列一下,@ 0 @
-  聽得時候都差不多聽懂了，可是自己做的時候發現不知道從何入手，即使是看著老師的需求與代碼，也根本不懂怎麼寫了，感覺自己聽完了就全都忘光了，很鬱悶！
- 我現在學習的感覺就像 你是個俄國人，教我了一句外語，你已經重複 了很多遍，我也努力再聽，但是當你說完的那一刻，我就完全不知道你說了什麼。就是僅僅過了一耳朵，再加上內容太多，我已經感覺完全跟不上了，怎麼辦，我有點崩潰。怎麼破
  + 上帝撒了一把智慧，可惜我打了一把傘
  + 多花時間、廢寢忘食
- 老師你是不是喜歡Anglebaby?我同桌問的，她是個女的
  + Angelababy
- 如何在瀏覽器中模擬所謂的art-template高級技術？關於瀏覽器操作cookie的插件如何使用，需要注意些什麼？還可以安裝一些什麼谷歌瀏覽器插件，有助於提高開發效率或模擬項目、測試的實用插件！
  + 只是一個工具
  + https://github.com/js-cookie/js-cookie
  + EditThisCookie Chrome 瀏覽器插件
-  文件引入有規則嗎，像router.js中，需要重新引入第三方模塊express，但是body-parser在routre頁面也使用了呀，但是怎麼不用引入
  +  這主要是中間件的原因
- req.session對象不清楚 希望老師再講講
  + req.session.xxx = xxx
  + req.session.xxx
  + Session 是基於 Cookie 實現的
- session 那塊還是不怎麼明白
-  課間下課儘量要準時，特別是上午第一節課比較困，聽課效率低，反正下課次數固定，也不會讓上課時間減少。 下午5點半增加上課時間多多益善
-  思路有點亂，有些小地方不明確，總的來說練得太少
- mongoose中的Schema用的不熟練
  + 多寫寫
-  如果先啟動node服務，再開啟數據庫，數據庫服務開啟了，但是數據庫並沒有連接，這樣會出現所有的操作都會失效的情況，必須打開新的命令行使用mongo命令手動連接數據庫 反過來，如果先開啟數據庫，再開啟node服務，就不會出現這樣的問題，因為user.js代碼中mongoose.connect('mongodb://localhost/test', { useMongoClient: true })自動連接了數據庫，剛開始以為數據庫竟然和node產生了依賴，原來並不是！ 希望老師控制每節課的上課時間，一節課集中精力的時間最多20分鐘，接下來的20分鐘基本只有一半的效率，後面的時間效率只會指數減小，所以希望老師能在45分鐘左右就休息一次，也能提高效率； 老師講的很細，很認真，也很負責，希望能在最後一個月的時間學好最重要的內容，就像你說的，因為剛好遇見你！
  +  你說的對，加油。
- 一到數據庫就蒙。數據庫始終連接不上去。我覺得不知道我數據庫都學了什麼?_?
- nice！

---

## 複習

- path 模塊
- __dirname 和 __filename
  + **動態的** 獲取當前文件或者文件所處目錄的絕對路徑
  + 用來解決文件操作路勁的相對路徑問題
  + 因為在文件操作中，相對路徑相對於執行 `node` 命令所處的目錄
  + 所以為了儘量避免這個問題，都建議文件操作的相對路勁都轉為：**動態的絕對路徑**
  + 方式：`path.join(__dirname, '文件名')`
- art-template 模板引擎(include、block、extend)
  + include
  + extend
  + block
  + 動手寫一寫
- 表單同步提交和異步提交區別
  + 字符串交互
  + 請求（報文、具有一定格式的字符串）
  + HTTP 就是 Web 中的溝通語言
  + 服務器響應（字符串）
  + 01
  + 服務器端重定向針對異步請求無效
- Express 中配置使用 express-session 插件
  + 插件也是工具
  + 你只需要明確你的目標就可以了
  + 我們最終的目標就是使用 Session 來幫我們管理一些敏感信息數據狀態，例如保存登陸狀態
  + 寫 Session
    * req.session.xxx = xx
  + 讀 Session
    * req.session.xxx
  + 刪除 Session
    * req.session.xxx = null
    * 更嚴謹的做法是 `delete` 語法
    * delete req.session.xxx
- 概述案例中註冊-登陸-退出的前後端交互實現流程

---

## 上午總結

---

## 下午總結

---

## 總結

---

## 目標
