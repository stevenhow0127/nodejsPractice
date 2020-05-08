const fs = require('fs')

function promiseReadFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

promiseReadFile('./01.txt')
    .then((data) => {
        console.log(data)
        return promiseReadFile('./db.json')
    })
    .then((data) => {
        console.log(data)
        return 123
    })
    .then((data) => {
        console.log(data)
    })
