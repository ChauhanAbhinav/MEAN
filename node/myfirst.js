const http  = require('http');
const td = require('./date.module');

http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(td.myDate());
    console.log(td.myDate());
    res.end('<br>Ending');
}).listen(8080);