const express = require('express')
const router = require('./day4_05_routerList.js')
const bodyParser = require('body-parser')

const app = express()

app.engine('html', require('express-art-template'))
app
    .use('/public/', express.static('./public/'))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .use(router)

app.listen(80, function(){
    console.log('Express app is running...')
})
