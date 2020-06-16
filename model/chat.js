var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    chatUniversity:{type:String}, //학교 코드
    chatForum:{type:String}, //수업 코드
    chatMsg:[{
        msgSender:{type: String, require:true},
        msg:{type:String, require:true}
    }]
})
module.exports = mongoose.model('chat',chatSchema)
