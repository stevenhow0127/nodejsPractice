//為了方便處理靜態資源，默契把這些靜態資源放在public目錄中

const express = require('express')
const fs = require('fs')
const url = require('url')

const app = express()

//express中引入art-template
//參數一：當以.html結尾文件渲染時，使用art-template module
//express-art-template即整合art-template進express的功能
//如此express即為response對象提供一個render方法
// ex: res.render('html檔名', {art-template數據})
// 預設第一個參數會去尋找 views/目錄，所以不須特別指定 views/路徑
app.engine('html', require('express-art-template'))

//若希望修改render方法的預設路徑，用.set去修改
//app.set('views', 'render函數的預設路徑')

var comments = []
fs.readFile('./db.json', function (err,data) {
    comments = JSON.parse(data)
})

app.use(express.static('./public'))

app
    .get('/', function (req, res) {
        fs.readFile('./views/boardIndex.html', function (err, data) {
            if (err) return res.send('404 Not Found.')
            /*
            var htmlStr = template.render(data.toString(), {
                'comments' : comments
            })
            */
            //.render方法預設至views/目錄找，所以直接打views/裡面檔名
            res.render('boardIndex.html', {
                comments: comments
            })
        })
    })
    .get('/post', function (req, res) {
        /*
        fs.readFile('./views/boardPost.html', function (err, data) {
            if (err) {
                return res.send('404 Not Found.')
            }
            res.end(data)
        })
        */
       res.render('boardPost.html')
    })
    .get('/msgUpload', function (req, res) {
        /*
        var parseObj = url.parse(req.url, true)
        comment = parseObj.query
        */
        //express直接用req.query取得get後綴
        var comment = req.query
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
        /*
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
        */
        res.redirect('/') 
    })

app.listen(80, function(){
    console.log('App is running...')
})