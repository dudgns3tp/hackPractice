var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    univCode:{type:String, required:true},
    chatLecture:{type:String, required:true}, //수업 코드
    chatMsg:[{
        msgSender:{type: String, require:true},
        msg:{type:String, require:true},
        date:{type:Date, default:Date.now}
    }]
})
module.exports = mongoose.model('chat',chatSchema)
