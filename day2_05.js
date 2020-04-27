var fs = require('fs')
var template = require('art-template')
var http = require('http')
var server = http.createServer()
var wwwDir = 'C:/Users/Steven LIU/Desktop/nodejs/www'

server.on('request', function(req, res){
    /*
    var url = req.url
    var filePath = '/index.html'
    if (url !== '/') filePath = url
    */

    fs.readFile('./day2_06.html', function(err, data){
        if (err) return res.end('404 Not Found.')
        fs.readdir(wwwDir, function(err, files){
            if (err) return res.end('404 Not Found.')

            var htmlstr = ''
            htmlstr = template.render(data.toString(), {
                'title' : 'Modules test',
                'files' : files
            })
            res.end(htmlstr)
        })
    })
})

server.listen(80, function(){
    console.log('Server running...')
})