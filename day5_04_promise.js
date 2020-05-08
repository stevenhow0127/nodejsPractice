//EcmaScript 6 中新增了一個API Promise
//Promise是一個構造函數
//主要為避免回調地獄

//新增一個promise容器
//1. 給承諾 (promise本身不是非同步，只有裡面的function才是非同步)
const fs = require('fs')

const p1 = new Promise((resolve, reject) => {
    fs.readFile('./01.txt', 'utf8', (err, data) => {
        //promise容器狀態為rejected
        //此處的reject()實際上就是then()所傳遞的第二個function參數
        if (err) reject(err)
        //promise容器狀態為resolved
        //此處的resolve()實際上就是then()所傳遞的第一個function參數
        resolve(data)
    })
})

const p2 = new Promise((resolve, reject) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        //promise容器狀態為rejected
        //此處的reject()實際上就是then()所傳遞的第二個function參數
        if (err) reject(err)
        //promise容器狀態為resolved
        //此處的resolve()實際上就是then()所傳遞的第一個function參數
        resolve(data)
    })
})

//當p1為resolved，.then()就去執行；then()的參數即為resolve(data)
p1
    .then((data) => {
        console.log(data)
        //當前函數中return 甚麼就會給下一個then()接收
        //此處沒有return，下一個then()就會收到undefined
        return p2
    }, (err) => {
        console.log('document read error', err)
    })
    .then((data) => {
        //此處的data即為p2的resolve(data)
        console.log(data)
        //return沒有傳東西，下面的then()就會收到undefined
        return 'p3'
    }, (err) => {
        //此處的err即為p2的reject(err)
        console.log('second document read error', err)
    })
    .then((data) => {
        console.log(data)
    })
