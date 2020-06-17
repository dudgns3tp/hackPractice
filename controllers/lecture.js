const util = require('../module/util');
const lecture = require('../model/lecture');
const university = require('../model/university');
const user =require('../model/user');
const jwt = require('../module/jwt');

module.exports = {
    addLecture: async(req,res)=>{ // 과목 등록
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

    },
    registrationLecture : async (req,res)=>{
        const {universityCode, email} = req.decoded;
        const {lectureCode} = req.body;

        // lecture Code 유효 검증

        // lecture Code 검색해서 obejectId 가져오기
        let lectureId = await lecture.findOne({lectureCode:lectureCode})

        console.log(lectureId)
        // user의 수강과목에 등록!
        try{  
            const userResult = await user.findOne({email:email})
            console.log(userResult)
            userResult.registration.push(lectureId);
            userResult.save();
            
            return res.status(200).json({message:"시간표 등록 성공", data:userResult});
        }catch(err){
            if(err){
                console.log(err)
                return res.status(500).json({message:"시간표 등록 실패"});
            }
        }
        
        
    }

}