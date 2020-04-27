var http = require('http');
var server = http.createServer();
var fs = require('fs');

server.on('request', function(req, res){
    var url = req.url;
    if(url === '/'){
        fs.readFile('./index.php', function(err, data){
            if(err){
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('File load failed!');
            }else{
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                //end可以處理兩種數據類型，二進制與string
                res.end(data);
            }
        })
    }else if(url === '/img'){
        fs.readFile('./Photos/IMG_2667.jpg', function(err, data){
            if(err){
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('File load failed!');
            }else{
                res.setHeader('Content-Type', 'image/jpeg');
                res.end(data);
            }
        })
    }else{

    }
});

server.listen(3000, function(err){
    console.log('Server is running...');
})