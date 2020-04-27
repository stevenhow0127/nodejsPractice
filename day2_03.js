//1. npm安裝 art-template
//2. 文件中 require art-template 
//3. 查文件，使用該module的API

var template = require('art-template')
var fs = require('fs')
/*var content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>hello I'm {{ name }}.</p>
    <p>I'm {{ age }}.</p>
    <p>I come from {{ place }}</p>
    <p>I like {{ each hobbies }} {{ $value }} {{ /each }}</p>
</body>
</html>
`
*/
fs.readFile('./day2_04_artTemplate.html', function(err, data){
    if (err) {
        return console.log('Failed to read file!')
    }
    // template('script 標籤 id', {對象}) <- browser才能用
    // data為二進資料
    var ret = template.render(data.toString(), {
        'name' : 'Jack',
        'age' : 39,
        'place' : 'Taiwan',
        'hobbies' : [
            'coding',
            'baseball',
            'design'
        ]
    })
    console.log(ret)
})