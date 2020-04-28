const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app
    .engine('html', require('express-art-template'))
    .use(express.static('./public'))
    //配置body-parser
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .get('/', function (req, res) {
        res.render('boardIndex.html', {
            title: 'Nodejs Express Practice',
            comments: comments
        })
    })
    .get('/post', function (req, res) {
        res.render('boardPost.html', {
            title: 'Nodejs Express POST Practice'
        })
    })
    .post('/post', function (req, res) {
        //post沒有query參數可以取，無法使用.query取得?之後的參數
        //express要取得post需先安裝第三方module body-parser
        //引進來之後用req.body取得物件對象req.body.name, req.body.message
        var comment = req.body
        var d = new Date()
        var y = d.getFullYear()
        var m = d.getMonth()+1
        comment.time = `${y}/${m}/${d.getDate()}`
        comments.unshift(comment)
        res.redirect('/') 
    })
    .listen(80, function(){
        console.log('App is running...')
    })

var comments = [
    {
        "name": "sharon",
        "message": "end world",
        "time": "2020/4/18"
    },
    {
        "name": "Luka",
        "message": "Yo world",
        "time": "2020/4/18"
    },
    {
        "name": "Lea",
        "message": "Hi world",
        "time": "2020/4/18"
    },
    {
        "name": "Damien",
        "message": "Hello world",
        "time": "2020/4/18"
    },
    {
        "name": "Steven",
        "message": "Taiwan No.1",
        "time": "2020/4/17"
    }
]