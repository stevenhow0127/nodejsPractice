const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const router = require('./routes/router')

const app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, '../node_modules/')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    //配置express-session，完成後即可用req.session來處理
    //添加session：req.session.foo = 'bar'
    //訪問session：req.session.foo
    //預設session數據存在server的RAM中，服務restart就會需要client重新登入，還需要設置永久儲存session在server端的調整
app.use(session({
    secret: 'keyboard cat', //這裡是配製加密時與原密碼拼接，提高解密難度，預設為keyboard cat，可隨便換
    resave: false,
    saveUninitialized: false //無論是否使用session，預設true都會直接分配client一把鑰匙(session)
}))
    
    //所有配置一定要在router之前
app.use(router)

app.engine('html', require('express-art-template'))

app.listen(80, () => {
    console.log('App server is running...')
})
