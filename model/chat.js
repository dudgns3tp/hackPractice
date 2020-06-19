/*
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    univCode:{type:String, required:true},
    chatLecture:{type:String, required:true}, //수업 코드 room
    chatMsg:[{
        msgSender:{type: String, require:true},
        msg:{type:String, require:true},
        createdAt:{type:Date, default:Date.now},
        file:String
    }]
})
module.exports = mongoose.model('chat',chatSchema)
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    room:{type:String, required:true},
    name:{type:String, required:true}, //이름
    msg:{type:String}
})
module.exports = mongoose.model('chat',chatSchema)

