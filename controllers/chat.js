const util = require('../module/util');
const socket = require('../module/socket');
const chat = require('../model/chat');
const lecture = require('../model/lecture');

module.exports = {
    getChatRooms: async(req,res)=>{
       
    },
    chatInit: async (req,res) =>{
        const {universityCode, email} = req.decoded;
        return res.status(200).json({message:"test",email:email ,universityCode:universityCode});
    },
    chatting: async(req, res) =>{
        /*
        /room/:lectureCode/chat   
        @param: lectureCode
        @token: universityCode, email
        */
       const {universityCode, email} = req.decoded;
       const {lectureCode} = req.params;

       // 2.
       try{
           const chat = new chat({
                univCode:universityCode,
                chatLecture:chatLecture,
                chatMsg:{
                    msgSender:email,
                    msg:req.body.msg,
                    //이미지관련 처리
                }
           });
           await chat.save();
           req.app.get('io').of('/chat').to(lectureCode).emit('chat-msg',msg);
       }catch(err){
            console.log(err);
            return res.status(500).json({message:"chatting error!"});
       }


       //room 에 user 입장!

       /*
       1.room(lectureCode) 지정
       2.
       문자 보내는사람,
       메세지,
       현재시간을 디비에 저장한다.
       */

    }
}