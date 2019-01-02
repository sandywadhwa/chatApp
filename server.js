var express = require('express');
var app = express();
var httpServer = require('http').Server(app);
var io = require('socket.io')(httpServer)
var port = 3000;

app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile('index.html');
});

io.on('connection', function(socket){
    console.log("New Client Connected");

    socket.emit('message-from-server', {
        greeting : 'Hello Client! Welcome'
    });

    socket.on('message-from-client', function(client_message){
        console.log(client_message);
    });
})


httpServer.listen(port, function(){
  console.log('listening on *: '+port);
});