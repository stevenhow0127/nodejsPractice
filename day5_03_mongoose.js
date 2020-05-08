const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})

//設計collections結構
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

//將collections結構發布成模型：mongoose.model，參數一：資料庫名稱(大寫單數名詞，mongoose會自動轉成小寫複數名詞：User => users)、參數二：資料表構造
const User = mongoose.model('User', userSchema)

//insert
var admin = new User({
    username: 'steven',
    password: '19810127',
    email: 'steven@gmail.com'
})
admin.save().then(() => console.log('Insert success!!'))

//read all
User.find((err, ret) => {
    if (err) return console.log('Read error!')
    console.log(ret)
})

//read someone
User.findOne({
    username: 'admin', //加查詢條件只需增加項目
    password: 'fuck54383845'
}, (err, ret) => {
    //throw：1. 阻止程式繼續執行，2. 錯誤訊息印至console
    if (err) throw err
    return console.log(ret)
})

//delete
User.remove({
    username: 'steven'
}, (err, ret) => {
    if (err) throw err
    return console.log(ret)
})

//update by id
User.findByIdAndUpdate('5eb2d2cb45e237309c0a88f2', {
    password: '1234'
}, (err, ret) => {
    if (err) throw err
    return console.log(ret)
})

//update by other parameters
User.findOneAndUpdate({
    username: 'admin'
}, {
    password: '5678'
}, (err, ret) => {
    if (err) throw err
    return console.log(ret)
})
