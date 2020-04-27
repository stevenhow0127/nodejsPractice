var fooExports = require('./day3_01_foo')

//對應foo.js裡面用exports.add輸出
//console.log(fooExports.add(5,4))

//對應foo.js裡面用module.exports單一輸出
//console.log(fooExports)

//對應foo.js裡面module.exports為json對象
console.log(fooExports.add(5,4))
console.log(fooExports.str)