var http = require('http');
var server = http.createServer();

server.on('request', function(req, res){
    var url = req.url;
    if(url === '/plain'){
        res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
        res.end('Hello, 世界!');
    }else if(url === '/html'){
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.end('<h1>Hello, 世界! <a href="">點我</a></h1>');
    }
});

server.listen(3000, function(err){
    console.log('Server is running...');
})