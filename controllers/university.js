const util = require('../module/util');
const user = require('../model/user');
const university = require('../model/university');
let encryption = require('../module/encryption');
const jwt = require('../module/jwt');

module.exports = {
    addUniversity: async(req,res)=>{
        const {universityName} = req.body;

        var universityModel = new university();
        universityModel.universityName = universityName;
        universityModel.save()
        .then((newUniv) =>{
            console.log(newUniv);
            return res.status(200).json({
                message:"학교 생성 성공",
                data:newUniv
            });
        })

    }
}