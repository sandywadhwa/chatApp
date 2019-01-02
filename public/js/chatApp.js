var socket = io('http://localhost:3000');

socket.on('message-from-server', function(evt){
    console.log('server sent '+ evt.greeting);

    socket.emit('message-from-client', {
        greeting: 'Hello Server! I am New Client'
    })
})

var mod = angular.module('chatApp', []);

