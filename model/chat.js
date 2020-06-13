var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    chatUniversity:{type:String}, //학교 코드
    chatForum:{type:String},
    
})
module.exports = mongoose.model('chat',chatSchema)
