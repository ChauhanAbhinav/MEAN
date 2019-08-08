const fs = require('fs');
const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/html'});
    
    // read fiile
    fs.readFile('read.txt',(err, data)=>{
        res.write(data);
        res.end();
    });
    //append file
    // fs.appendFile('read.txt', '<b> Appended content!<b>',(err) => {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });
      fs.open('readme.txt', 'w', (err, file) => {
        if (err) throw err;
        console.log(file);
      });
      fs.writeFile('readme.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      fs.unlink('readme.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });
      fs.rename('read.txt', 'read1.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
      });
      
}).listen(8080);
