var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var universitySchema = new Schema({
    universityName : {type:String, required:true, unique:true},
    phone:{type:String, required:true},//대표 번호
    department:{type:String, default:null},//학과
    universityImage:String,
    universityCode:{type:String, unique:true},  
})
module.exports = mongoose.model('university',universitySchema);