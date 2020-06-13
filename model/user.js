const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type: String, required: true},
    email : {type:String, required: true, unique:true},
    profileName:{type:String, default:null},
    password:{type:String, required:true},
    salt :{type:String, required:true},
    phone : {type:String, required:true, unique:true},
    universityCode:{type:String, default:null},
    profileImage:String
});
module.exports = mongoose.model('user',userSchema)