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
            //var callback = data => console.log(data)
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

exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) return callback(err)
        //callback第一個參數為err, 第二個是結果data
        var students = JSON.parse(data).students
        var result = students.find(function (item) {
            return item.id === parseInt(id)
        })
        callback (null, result)
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

//3. 修改資料(byID)
exports.update = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) return callback(err)
        var students = JSON.parse(data).students
        student.id = parseInt(student.id)
        //find student by id -> EcmaScript 6的find方法
        //updateTarget只是找出item，沒有另建一個新物件對象
        //所以改變updateTarget內容就是改變students內容
        var updateTarget = students.find(function (item) {
            return item.id === student.id
        })
        //遍歷update對象
        for (var key in student) {
            updateTarget[key] = student[key]
        }
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

//4. 刪除資料
exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) return callback(err)
        //callback第一個參數為err, 第二個是結果data
        var students = JSON.parse(data).students
        //findIndex()專門用來根據條件尋找元素的index
        var resultId = students.findIndex(function (item) {
            return item.id === parseInt(id)
        })
        //.splice()將元素刪除 -> .slice(第幾項, 刪幾個)
        students.splice(resultId, 1)
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
