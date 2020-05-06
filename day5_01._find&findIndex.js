const users = [
    {id: 1, name: 'first'},
    {id: 2, name: 'second'}
]

Array.prototype.myFind = function (conditionFunc) {
    for (let i = 0; i < this.length; i++) {
        if (conditionFunc(this[i], i)) {
            //.find
            return this[i]
            //.findIndex
            //return i
        }
    }
}

let ret = users.myFind((item, index) => {
    return item.id === 2
})

console.log(ret)

/*
every
some
includes
map
reduce
forEach
*/