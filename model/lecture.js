var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lectureSchema = new Schema({
    lectureName:{type: String, required : true}, //강의 명
    lectureCode:{type:String, required:true, unique:true},
    classTime:[{
        startTime:String,
        endTime:String,
        date:String,
    }],
    buildingName:String,
    lectureRoom:String,
    professor:String,
    lectureReview:[String]
})
module.exports = mongoose.model('lecture',lectureSchema)
