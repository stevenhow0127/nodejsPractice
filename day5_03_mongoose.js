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
/*var admin = new User({
    username: 'steven',
    password: '19810127',
    email: 'steven@gmail.com'
})
admin.save().then(() => console.log('Insert success!!'))
*/
//read all
/*User.find({
    username: 'steven'
}, (err, ret) => {
    if (err) return console.log('Read error!')
    console.log(ret)
})

//read someone
User.findOne({
    username: 'admin', //加查詢條件只需增加項目
    password: 'fuck54383845'
}, (err, ret) => {
    if (err) return console.log('Read error!')
    return console.log(ret)
})
*/

//delete

