const http = require('http');
const url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

  res.write('Hello World!',true); //write a response to the client

  res.end(); //end the response
  let myUrl = url.parse(req.url);

  console.log(myUrl.query);
}).listen(8080); 

// var a =1;
// var fun = (a) => {
//  console.log('inside fun'+a);
//  a=2;
//  console.log('inside fun'+a);
// }

// fun(a);
// console.log('outside fun'+a);