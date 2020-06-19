const socketIO = require('socket.io');
const chat = require('../model/chat');
var roomName = [];
module.exports = {
    webSocket: async (server, app) => {
        let room = ['room1', 'room2', 'room3'];
        let a = 0;
        const io = socketIO(server);
        app.set('io', io);
        console.log('소켓통신 연결')
        //양방향 연결
        io.on('connection', (socket) => {
            console.log('a user connected :');
            
            socket.on('joinRoom', (num, name) => {
                socket.join(room[num], () => {
                    io.to(room[num]).emit('joinRoom', num, name);
                });
            });

            socket.on('leaveRoom', (num, name) => {
                socket.leave(room[num], () => {
                    io.to(room[num]).emit('leaveRoom', num, name);
                });
            });
            socket.on('chat-msg', (num, name, msg) => {
                a = num;
                console.log(name + ' s msg :' + msg+' .... socketId:',socket.id+'room Id:',socket.rooms);
                io.to(room[a]).emit('chat-msg', name, msg)

            })
            

            socket.on('disconnect', () => {
                console.log('user disconnected');
            })

        })
    }
}