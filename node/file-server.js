const http = require('http');
const fs = require('fs')
const url = require('url');

http.createServer((req, res)=>{
    let parsedUrl = url.parse(req.url, true);
    let filename = '.'+parsedUrl.pathname;
    console.log('fileName'+filename);
    
    if(filename!='./favicon.ico')
    {fs.readFile(filename,(err, data)=>{
                if(err) throw err;
                    
                else{
                res.write(data);
                res.end();   
                console.log("success");
                }
            
        })
    }
 
}).listen(8080);