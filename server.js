var express = require('express');
var app = express();
var httpServer = require('http').Server(app);
var io = require('socket.io')(httpServer)
var port = 3000;

app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile('index.html');
});

httpServer.listen(port, function(){
  console.log('listening on *: '+port);
});