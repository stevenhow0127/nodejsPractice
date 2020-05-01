/*
功能：
1. 獲得資料
2. 添加資料
3. 修改資料
4. 刪除資料
*/
const fs = require('fs')

var dbPath = './db.json'

//1. 獲得資料
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        /*
        要取得非同步函數需用callback回調函數：
        function fn (callback) {
            //var callback = function (data) { console.log(data) }
            setTimeout(function () {
                var data = 'hello'
                callback(data)
            }, 1000)
        }
        fn (function (data) {
            console.log(data)
        })
        */
        if (err) return callback(err)
        //callback第一個參數為err, 第二個是結果data
        callback (null, JSON.parse(data).students)
    })
}

//2. 添加資料
//student給新增加的物件
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) return callback(err)
        var students = JSON.parse(data).students
        //生成新student的id
        student.id = students[students.length - 1].id + 1
        students.push(student)
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) return callback(err)
            //成功回傳err === null
            callback(null)
        })
    })
}

//3. 修改資料
exports.update = function () {

}

//4. 刪除資料
exports.delete = function () {

}