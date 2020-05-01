const fs = require('fs')

var dbPath = './db.json'

exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) return callback(err)
        callback (null, JSON.parse(data).students)
    })
}

exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) return callback(err)
        var students = JSON.parse(data).students
        var result = students.find(function (item) {
            return item.id === parseInt(id)
        })
        callback (null, result)
    })
}

exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) return callback(err)
        var students = JSON.parse(data).students
        student.id = students[students.length - 1].id + 1
        students.push(student)
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) return callback(err)
            callback(null)
        })
    })
}

exports.update = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) return callback(err)
        var students = JSON.parse(data).students
        student.id = parseInt(student.id)
        var updateTarget = students.find(function (item) {
            return item.id === student.id
        })
        for (var key in student) {
            updateTarget[key] = student[key]
        }
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) return callback(err)
            callback(null)
        })
    })
}

exports.delete = function () {

}