//為了方便處理靜態資源，默契把這些靜態資源放在public目錄中

var http = require('http')
var fs = require('fs')
var template = require('art-template')
//從get表單submit可由url去取得資訊：url.parse('字串', true)
//true參數將查詢字串轉為object，用.query屬性來參訪
var url = require('url')

var comments = []
fs.readFile('./db.json', function (err,data) {
    if (err) return res.end('404 Not Found.')
    comments = JSON.parse(data)
})
//物件方法的省力寫法
http
    .createServer(function (req, res) {
        var parseObj = url.parse(req.url, true)
        //.pathname取得不包含?等參數的內容
        var pathname = parseObj.pathname
        if (pathname === '/') {
            fs.readFile('./views/boardIndex.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found.')
                }
                var htmlStr = template.render(data.toString(), {
                    'comments' : comments
                })
                res.end(htmlStr)
            })
        } else if (pathname.indexOf('/public') === 0) {
            //若request以/public開頭，意即存取開放靜態資源，就把request當作文件路徑直接讀取
            // '.'才是同目錄讀取
                fs.readFile('.' + pathname, function (err, data) {
                    if (err) {
                        return res.end('404 Not Found.')
                    }
                    res.end(data)
                })
        //精簡url
        } else if (pathname === '/post') {
            fs.readFile('./views/boardPost.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        //收到上傳留言的action="/msgUpload"路徑
        } else if (pathname === '/msgUpload') {
            //會得到一個json {'name' : xxx, 'message' : xxx}
            var comment = parseObj.query
            var d = new Date()
            var y = d.getFullYear()
            var m = d.getMonth()+1
            comment.time = `${y}/${m}/${d.getDate()}`
            //.push加到最後 / .unshift加到最前面
            comments.unshift(comment)
            //將comments由json轉字串
            var sComments = JSON.stringify(comments)
            //將轉為字串的變數寫入資料庫檔案
            fs.writeFile('db.json', sComments, (err) => {
                if (err) throw err
                console.log('Success!!')
            })
            //從瀏覽器重導url: 
            // 302: statusCode (302為臨時重導)
            // location: setHeader
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()      
        } else {
            //找不到的頁面都轉去404.html
            fs.readFile('./views/404.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        }
    })
    .listen(80, function(){
        console.log('Server is running...')
    })

/*
總結動作：
1. 判斷 / -> index.html
2. 開放 /public目錄
3. 增加 /post -> post.html
4. 接收表單數據 /msgUpload
    4.1 url.parse網址字串
    4.2 .query將資料存為json，推回array
    4.3 瀏覽器重新導向
        statusCode
        setHeader
*/