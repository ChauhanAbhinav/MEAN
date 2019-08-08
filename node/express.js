const express = require('express');
const app = express();

app.get('',(req, res)=>{
    res.end("hello world:"+req.body);
});
app.get('/users/:userId/books/:bookId',(req, res)=>{

    res.end('hello'+req.params.userId);
});
app.listen(8080);