const express = require('express')
const fs = require('fs')
const app = express()

app.engine('html', require('express-art-template'))
app.use('/public/', express.static('./public/'))
app.listen(80, function(){
    console.log('Express app is running...')
})
app.get('/', function (req, res) {
    //fs.readFile第二個參數為編碼格式，可以取代data.toString()
    fs.readFile('./db.json', 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('Server error...')
        }
        students = JSON.parse(data).students
        res.render('index.html', {
            fruits : ['apple', 'banana', 'citrus'],
            students : students
        })
    })
})