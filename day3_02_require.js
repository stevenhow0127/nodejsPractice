/*
require方法：
1. 核心modules -> require('名稱')
2. 第三方modules -> require('名稱')
3. 自己寫的modules -> require('路徑')

node_modules中預設先找package.json裡的'main'對應文件
找不到就往父級資料夾找
專案資料夾中用 npm init 可先建立基本資料
每次 npm install 時都要加 --save 更新package.json
就算node_modules資料夾遺失，只要package.json還在，
就能用 npm install 直接重建node_modules資料夾
*/

/*
常用npm指令：
+ npm init
    - npm init -y可跳過對答流程直接建置

+ npm install
    - 從package.json中重新下載建立node_modules
+ npm install + package名 --save
    - 下載並更新dependencies到package.json中
    - 可以簡寫為 npm i -S
+ npm i -S --global
    - 全域安裝

+ npm uninstall + package名
    - dependencies會保存
+ npm uninstall --save + package名
    - dependencies會刪除
    - 可以簡寫為 npm un -S

+ npm --help
    - 查看說明文件
+ npm + 命令 --help
    - 查看該命令的說明文件
*/