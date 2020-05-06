//開啟：mongod  預設數據目錄為c:/data/db，第一次使用需手動建立
//連接資料庫：mongo
//退出資料庫：exit

/*
基本命令：
+ show dbs：查看所有資料庫
+ db：查看當前資料庫
+ use + 資料庫名稱：切換到指定資料庫，若沒有則會新建
+ 
*/

//引入第三方mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/myDB', {useNewUrlParser: true, useUnifiedTopology: true})

//創建collection: Cat
const Cat = mongoose.model('Cat', { name: String })

/*
//實體化一個Cat
const kitty = new Cat({ name: 'Zildjian' });

//保存kitty
kitty.save().then(() => console.log('meow'));
*/
for (let i = 0; i < 10; i++) {
    let kitty = new Cat({name: 'meow' + i})
    kitty.save().then(() => console.log('meow' + i))
}