const util = require('../module/util');
const socket = require('../module/socket');
const chat = require('../model/chat');
const lecture = require('../model/lecture');

module.exports = {
    getChatRooms: async (req, res) => {

    },
    chatInit: async (req, res) => {
        const {
            universityCode,
            email
        } = req.decoded;
        return res.status(200).json({
            message: "test",
            email: email,
            universityCode: universityCode
        });
    },
    chatting: async (req, res, next) => {
        let room = req.params.room;
        const {
            msg,
            name
        } = req.body;
        console.log("gpgp: ",JSON.stringify(room))
        var chatModel = new chat();
        chatModel.room = room;
        chatModel.name = name;
        chatModel.msg = msg;
        chatModel.save()
            .then((newChat) => {
                console.log(newChat);
                req.app.get('io').to(room).emit('chat-msg',name, msg);
                res.send('ok')
            })
            .catch((err)=>{
                console.log(err)
                next(err)
            })
    }
}