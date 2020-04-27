var fs = require('fs')
var http = require('http')
var server = http.createServer()
var wwwDir = 'C:/Users/Steven LIU/Desktop/nodejs/www'

server.on('request', function(req, res){
    var url = req.url
    var filePath = '/index.html'
    if (url !== '/') filePath = url
    
    fs.readFile(wwwDir + filePath, function(err, data){
        if (err) return res.end('404 Not Found.')
        //fs.readdir讀取目錄
        fs.readdir(wwwDir, function(err, files){
            if (err) return res.end('404 Not Found.')
            console.log(files)
            var content = ''
            files.forEach(function(item){
                //``可以放入分段分行空格之string
                //EcmaScript 6的``string中可用${}引用var
                content += `
                    <tr>
                        <td valign="top"><img></td>
                        <td><a href="${item}">${item}</a></td>
                        <td>&nbsp;</td><td align="right">  - </td>
                        <td>&nbsp;</td>
                    </tr>
                `
            })
            //data原本為二進位數據，要處理須轉string
            data = data.toString()
            //.replace('抓取字串', '替換字串')
            data = data.replace('^_^', content)
            res.end(data)
        })
    })
})

server.listen(80, function(){
    console.log('Server running...')
})