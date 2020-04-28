const express = require('express')
const app = express()

app.listen('80', function(){
    console.log('express app is running...')
})

//.use省略第一個參數時，可直接對應/public/內路徑
app.use(express.static('./board/public/'))

app
    .get('/', function (req, res) {
        res.send('wow, this is index!')
    })
    
