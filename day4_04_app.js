const express = require('express')
const router = require('./day4_05_routerList.js')
const bodyParser = require('body-parser')

const app = express()
app.engine('html', require('express-art-template'))
app
    .use('/public/', express.static('./public/'))
    //配置modules和body-parser一定要放在app.use(router)之前
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

//將routerList.js中exports的router掛載進來
    .use(router)

app.listen(80, function(){
    console.log('Express app is running...')
})