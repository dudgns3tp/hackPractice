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
    buildingName:String, // 강의 건물 이름
    lectureRoom:String,  // 강의실 번호
    professor:String,  // 교수님
    lectureReview:[{
        writer:String,
        reviewContent:String,
        start:Number
    }],
})
module.exports = mongoose.model('lecture',lectureSchema)
