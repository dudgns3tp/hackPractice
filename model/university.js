var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var universitySchema = new Schema({
    universityName : {type:String, required:true, unique:true},
    universityCode : {type:String, required:true, unique:true}
    /*
    phone:{type:String, required:true},//대표 번호
    department:[{
        departmentName:String,//학과 이름
        departmentIdx:Number // 학과번호
    }],//학과
    universityImage:String,
    universityCode:{type:String, unique:true},  
    */
},{minimize:false})
module.exports = mongoose.model('university',universitySchema);