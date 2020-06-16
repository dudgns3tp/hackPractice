const util = require('../module/util');
const lecture = require('../model/lecture');
const university = require('../model/university');
const jwt = require('../module/jwt');

module.exports = {
    addLecture: async(req,res)=>{
        const {lectureName, universityCode, lectureCode} =req.body;
        var lectureModel = new lecture();
        lectureModel.lectureName = lectureName;
        lectureModel.universityCode = universityCode;
        lectureModel.lectureCode = lectureCode;
        lectureModel.save()
        .then((newLecture) =>{
            console.log(lecture);
            return res.status(200).json({
                message:"강의 생성 성공",
                data:newLecture
            });
        })
        .catch((err)=>{
            console.log(err);
            return res.status(500).json({message:"강의 추가 실패"});
        })

    }
}