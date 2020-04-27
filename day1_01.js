
/*
==fs讀取與寫入練習==
var fs = require('fs');
fs.readFile('01.txt', function(error, data){
        //若error不為null
        if(error){
                console.log('read file failed!!');
        }else{
        //data須轉為string才能給console讀
                console.log(data.toString());
        }
});
fs.writeFile('./testWriteFile.txt', '測試以node.js寫入檔案', function(error){
        if(error){
                console.log('寫入檔案失敗!');
        }else{
                console.log('寫入成功!!');
        }
});*/

//==開啟server練習==
var http = require('http');
var server = http.createServer();
//request has two methods:
//1. request: client -> server
//2. response: server -> client
//      response.write  need 'end' to finish
server.on('request', function(request, response){
        //預設編碼格式為UTF-8
        response.setHeader('Content-Type', 'text/plain; charset=utf-8');
        console.log('Request received via: '+request.url);
        console.log('Ur connect port is: '+request.socket.remotePort);
        console.log('Ur IP addr is: '+request.socket.remoteAddress);
        var url = request.url;
        var products = [
                {
                        name:'apple',
                        price: 1000
                },
                {
                        name:'microsoft',
                        price: 1200
                },
                {
                        name:'amazon',
                        price: 1100
                },
                {
                        name:'google',
                        price:900
                }
        ]
        if (url === '/'){
                //response.write('this is index');
                response.end('這是index!');
        }else if(url === '/login'){
                //response.write('this is login');
                response.end('this is login!');
        }else if(url === '/products'){
        //response只能回覆string或boolean，array須以json.stringify()轉string
                response.end(JSON.stringify(products));
        }else{
                //response.write('this is register');
                response.end('this is register!');
        }
});
server.listen(3000, function(){
        console.log('Server on! Visit http://127.0.0.1:3000/');
});