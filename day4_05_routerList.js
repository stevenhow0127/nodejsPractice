const express = require('express')
const app = express()
const router = express.Router()

var db = require('./day4_06_crudAPI')

router
    .get('/', function (req, res) {
        console.log('hello world!')
    })

    .get('/students', function (req, res) {
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
        var student = req.body
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
        var id = parseInt(req.query.id)
        db.deleteById(id, function (err) {
            if (err) return res.status(500).send('DB delete failed...')
            console.log('DB delete success!')
        })
        res.redirect('/students')
    })

module.exports = router
