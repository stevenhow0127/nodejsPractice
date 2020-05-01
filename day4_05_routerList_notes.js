const express = require('express')
const app = express()
//express有專用的.Router()
const router = express.Router()

//將crudAPI掛載進來
var db = require('./day4_06_crudAPI')

router
    .get('/', function (req, res) {
        console.log('hello world!')
    })

    .get('/students', function (req, res) {
        /*fs.readFile('./db.json', 'utf8', function (err, data) {
            if (err) {
                return res.status(500).send('Server error...')
            }
            students = JSON.parse(data).students
            res.render('index.html', {
                fruits : ['apple', 'banana', 'citrus'],
                students : students
            })
        })*/
        db.find (function (err, students) {
            if (err) return res.status(500).send('DB error...')
            res.render('index.html', {
                fruits: [
                    'apple',
                    'banana',
                    'citrus'
                ],
                students: students
            })
        })
        console.log('db loaded success!')
    })

    .get('/students/new', function (req, res) {
        res.render('new.html')
    })

    .post('/students/new', function (req, res) {
        //.body為物件
        var student = req.body
        //調用.save()只需要第一個參數為插入資料、第二個參數為function(err){}
        //function(callback)的callback永遠用function來回調
        db.save(student, function (err) {
            if (err) return res.status(500).send('DB writing failed...')
            console.log('DB insert success!')
        })
        res.redirect('/students') 
    })

    .get('/students/edit', function (req, res) {
        var id = parseInt(req.query.id)
        db.findById(id, function (err, student) {
            if (err) return res.status(500).send('DB error...')
            res.render('edit.html', {
                student: student
            })
        })
    })

    .post('/students/edit', function (req, res) {
        var student = req.body
        db.update(student, function (err) {
            if (err) return res.status(500).send('DB update failed...')
            console.log('DB update success!')
        })
        res.redirect('/students')
    })

    .get('/students/delete', function (req, res) {
        
    })

module.exports = router
