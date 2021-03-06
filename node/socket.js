var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

http.listen(2000, function(){
  console.log('listening on *:3000');
});

// app.use(express.static('./public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  io.emit('server','a user has joined the room');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  io.emit('server','a user left the room');
  });

  socket.on('chat message',(chatMessage)=>{  //listening to message from sender
    console.log("message poped up: "+chatMessage.text);
    io.emit('chat update', chatMessage)
  });

  })


