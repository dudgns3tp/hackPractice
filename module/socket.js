const socketIO = require('socket.io');
/*
user, 학교, 강의들의 정보를 불러와야함...
userIdx, 학교, 학과, 강의번호 
네임스페이스 :${학교}
룸: 강의번호

이벤트 발생시키고

해당 채팅 데이터 베이스에 저장... 하면 완벽하다구요.!
*/

module.exports = {
    webSocket : async(server,app)=>{
        let room = ['room1', 'room2','room3'];
    let a =0;
    const io = socketIO(server);
    app.set('io', io);
    console.log('소켓통신 연결')

    io.on('connection', (socket)=>{
        console.log('a user connected');

        socket.on('joinRoom', (num,name)=>{
            socket.join(room[num], ()=>{
                io.to(room[num]).emit('joinRoom', num, name);
            });
        });

        socket.on('leaveRoom', (num,name)=>{
            socket.leave(room[num], ()=>{
                io.to(room[num]).emit('leaveRoom', num, name);
            });
        });
        socket.on('chat-msg', (num,name,msg)=>{
            a = num;
            console.log(name+' s msg :' + msg);
            io.to(room[a]).emit('chat-msg',name, msg)
        })

        socket.on('disconnect', ()=>{
            console.log('user disconnected');
        })

    })
    }
}

