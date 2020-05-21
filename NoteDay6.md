# Node.js 第6天課堂筆記

## 知識點

- 多人社區案例

## 反饋

## 複習

- MongoDB 數據庫
  + 靈活
  + 不用設計數據表
  + 業務的改動不需要關心數據表結構
  + DBA 架構師 級別的工程師都需要掌握這項技能
    * 設計
    * 維護
    * 分佈式計算
- mongoose
  + mongodb 官方包也可以操作 MongoDB 數據庫
  + 第三方包：WordPress 項目開發團隊
  + 設計 Schema
  + 發佈 Model（得到模型構造函數）
    * 查詢
    * 增加
    * 修改
    * 刪除
- Promise
  + http://es6.ruanyifeng.com/#docs/promise
  + callback hell 回調地獄
  + 回調函數中套了回調函數
  + Promise(EcmaScript 6 中新增了一個語法 API)
  + 容器
    * 異步任務（pending）
    * resolve
    * reject
  + then 方法獲取容器的結果（成功的，失敗的）
  + then 方法支持鏈式調用
  + 可以在 then 方法中返回一個 promise 對象，然後在後面的 then 方法中獲取上一個 then 返回的 promise 對象的狀態結果

## 上午總結

## 下午總結

## 總結

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
- 表單同步提交和異步提交區別
  + 以前沒有 ajax 都是這麼幹的，甚至有些直接就是渲染了提示信息出來了
  + 異步提交頁面不會刷新，交互方式更靈活
- Express 中配置使用 express-session 插件
- 概述案例中註冊-登陸-退出的前後端交互實現流程

## 目標
