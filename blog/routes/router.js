const express = require('express')
//載入加密module
const md5 = require('blueimp-md5')
const app = express()
const router = express.Router()
const User = require('../models/user')

router
    .get('/', (req, res) => {
        res.render('index.html')
    })

    .get('/login', (req, res) => {
        res.render('login.html')
    })

    .post('/login', (req, res) => {
        
    })

    .get('/register', (req, res) => {
        res.render('register.html')
    })

    .post('/register', (req, res) => {
        const user = req.body
        //確認使用者是否已註冊過: email、nickname
        User.findOne({
            $or: [
                {
                    email: user.email
                },
                {
                    nickname: user.nickname
                }
            ]
        }, (err, data) => {
            //express提供一個回應的方法：.json()，會自動將json參數轉為string格式
            if (err) return res.status(500).json({
                errCode: 500,
                msg: 'Server Error'
            })
            if (data) return res.status(200).json({
                errCode: 1,
                msg: 'email or nickname existed...'
            })
            //用md5加密password，兩層是保險
            user.password = md5(md5(user.password))
            new User(user).save( err => {
                if (err) return res.status(500).json({
                    errCode: 500,
                    msg: 'Server Error'
                })
                res.status(200).json({
                    errCode: 0,
                    msg: 'ok'
                })
            })
        })
    })

    .get('/logout', (req, res) => {
        
    })

module.exports = router
