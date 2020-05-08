const express = require('express')
const app = express()
const router = express.Router()

var db = require('./day5_mongoDB')

router
    .get('/', (req, res) => {
        console.log('hello world!')
    })

    .get('/students', (req, res) => {
        db.find ((err, students) => {
            if (err) throw err
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

    .get('/students/new', (req, res) => {
        res.render('new.html')
    })

    .post('/students/new', (req, res) => {
        let student = req.body
        new db(student).save((err) => {
            if (err) throw err
            console.log('DB insert success!')
        })
        res.redirect('/students') 
    })

    .get('/students/edit', (req, res) => {
        let id = req.query.id
        db.findById(id, (err, student) => {
            if (err) throw err
            res.render('edit.html', {
                student: student
            })
        })
    })

    .post('/students/edit', (req, res) => {
        let student = req.body
        db.findByIdAndUpdate(student.id, student, (err) => {
            if (err) throw err
            console.log('DB update success!')
        })
        res.redirect('/students')
    })

    .get('/students/delete', (req, res) => {
        let id = req.query.id
        db.findByIdAndRemove({
            _id: id
        }, (err) => {
            if (err) throw err
            console.log('DB delete success!')
        })
        res.redirect('/students')
    })

module.exports = router
