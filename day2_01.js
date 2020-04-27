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
       res.end(data)
   })
})

server.listen(80, function(){
    console.log('Server running...')
})