var express = require('express')

//以express取代原本的http module
var app = express()

//指定/public目錄
app.use('/public', express.static('./board/public'))

app.get('/', function (req, res) {
        res.send('Hello world!')
    })

app.get('/about', function (req, res) {
    res.send('Im express')
})

app.listen(80, function(){
    console.log('app is running...')
})