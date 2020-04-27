//為了方便處理靜態資源，默契把這些靜態資源放在public目錄中

var express = require('express')
var fs = require('fs')
var template = require('art-template')
var url = require('url')

var app = express()

var comments = []
fs.readFile('./db.json', function (err,data) {
    if (err) return res.end('404 Not Found.')
    comments = JSON.parse(data)
})

app.use('/public', express.static('./public'))

app.get('/', function (req, res) {
    fs.readFile('./views/boardIndex.html', function (err, data) {
        if (err) {
            return res.end('404 Not Found.')
        }
        var htmlStr = template.render(data.toString(), {
            'comments' : comments
        })
        res.end(htmlStr)
    })
})
app.get('/post', function (req, res) {
    fs.readFile('./views/boardPost.html', function (err, data) {
        if (err) {
            return res.end('404 Not Found.')
        }
        res.end(data)
    })
})
app.get('/msgUpload', function (req, res) {
    var parseObj = url.parse(req.url, true)
    comment = parseObj.query
    var d = new Date()
    var y = d.getFullYear()
    var m = d.getMonth()+1
    comment.time = `${y}/${m}/${d.getDate()}`
    comments.unshift(comment)
    var sComments = JSON.stringify(comments)
    fs.writeFile('db.json', sComments, (err) => {
        if (err) throw err
        console.log('Success!!')
    })
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end() 
})

app.listen(80, function(){
    console.log('App is running...')
})