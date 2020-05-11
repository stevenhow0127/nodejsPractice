const path = require('path')
const file = require('./pathTest/fileRead')

/*
__dirname & __filename：
__dirname用來取得目前檔案所屬資料夾的絕對路徑
__filename用來取得目前檔案的絕對路徑
一般讀取文件的路徑(ex: ./db.json)是相對於「執行node命令時」所處路徑；並非檔案本身的相對路徑。因此甚麼地方執行node會關係到檔案內容的所有相對路徑
為了解決此問題，需要把相對路徑轉換為「動態的」絕對路徑：__dirname、__filename
BUT：require()中的路徑不受影響，因require()時就是在該檔案位置執行
*/

/*
path.join()練習
const path1 = path.join(__dirname, './public/')
const path2 = path.join(__dirname, '../node_modules/')
console.log(__dirname)
console.log(path1)
console.log(path2)
console.log(__filename)
*/
