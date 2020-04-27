function add(x, y) {
    return x + y
}

//exports.add的add是其他程式的調用名稱；後面的add為此程式裡面的function名
//module沒有用exports輸出就無法使用
//exports.add = add
//exports.str = 'hello world!'

//若只想直接輸出某程式或對象、不須用.方法導出，則要用module.exports輸出
//module.exports = add

//進階版
/*
module.exports.foo = 'hello world'
module.exports.add = function (x, y) {
    something...
}
*/
//node預設module.exports === exports
//var exports = module.exports
//結論：最後別的檔案require、從此檔案return出去的是module.exports，不是exports
//所以：

module.exports = {
    add: add,
    str: 'hello world!'
}

/*上面成立，等同於：
module = {
    exports: {
        add: function(){

        },
        str: 'hello'
    }
}
*/

//exports單獨賦值的話就會與module.exports脫鉤，反之亦同
//下面就無法輸出
/*
exports = {
    add: add,
    str: 'hello world!'
}
*/