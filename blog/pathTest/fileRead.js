const fs = require('fs')
const path = require('path')

//利用__dirname
fs.readFile(path.join(__dirname, './a.txt'), 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})
