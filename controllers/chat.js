const util = require('../module/util');
const socket = require('../module/socket');
const chat = require('../model/chat');
const university = require('../model/university');

module.exports = {
    groupChat: async(req,res)=>{
        const room = req.query.lectureCode;
        const {univCode, email} = req.decoded;

        /*
        1.room(lectureCode) 지정
        2.
        문자 보내는사람,
        메세지,
        현재시간을 디비에 저장한다.
        */

    },
    chatInit: async (req,res) =>{
        const {univCode, email} = req.decoded;
        console.log(req.decoded)

        return res.status(200).json({message:"test",email});
    }
}