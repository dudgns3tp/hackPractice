const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    email : {type:String, required: true, unique:true},
    name:{type: String, required: true},
    profileName:{type:String, default:null},
    password:{type:String, required:true},
    salt :{type:String, required:true},
    phone : {type:String, required:true, unique:true},
    universityCode:{type:String, required:true},
    profileImage:{type:String, default:null},
    registration:[], // 학생의 수강 목록 또는 교수의 강의 목록
    /*
    major
    {type: mongoose.Schema.Types.ObjectId, ref:'lecture'}
    */
});
module.exports = mongoose.model('user',userSchema)