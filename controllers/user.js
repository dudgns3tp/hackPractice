const util = require('../module/util');
const user = require('../model/user');
const univ = require('../model/university');
let encryption = require('../module/encryption');
const jwt = require('../module/jwt');

module.exports = {
    uploadImage: async (req, res) => {
        console.log(req.file);
        const image = req.file.location;
        if (image === undefined) {
            return res.status(400).send(util.fail(400, "이미지가 존재하지 않습니다."));
        }
        res.status(200).send(util.success(200, "요청 성공 〰️ ", image));
    },
    uploadImages: async (req, res) => {
        const image = req.files;
        const path = image.map(img => img.location);
        if (image === undefined) {
            return res.status(400).send(util.fail(400, "이미지가 존재하지 않습니다."));
        }
        res.status(200).send(util.success(200, "요청 성공 〰️ ", path));
    },
    signUp: async (req, res) => {
        const {
            email,
            name,
            profileName,
            password,
            phone,
            universityCode
        } = req.body;
        //1. 파라미터체크
        if (!email || !password || !name || !phone || !profileName || !universityCode) {
            return await res.status(200).json({
                message: "필수 정보를 입력하세요."
            });
        }

        //2 중복 체크
        try {
            const idCheck = await user.findOne({
                email: email
            }, {
                _id: 0,
                email: 1
            })
            console.log(idCheck);
            if (idCheck) {
                return await res.status(400).json({
                    message: "이미 존재하는 이메일 입니다."
                })
            }
            console.log('여긴가')
        } catch (err) {
            if (err) {
                return await res.status(500).json({
                    message: "signUp error."
                })
            }
        }
        // 3.핸드폰 번호 중복체크
        // 4.학교 코드 오류
        //5. 비밀번호 암호화
        const salt = await encryption.salt();
        const dbPassword = await encryption.encrypt(password, salt);

        //6.회원가입 완료
        var userModel = new user();
        userModel.email = email;
        userModel.password = dbPassword.toString('base64');
        userModel.name = name;
        userModel.phone = phone;
        userModel.profileName = profileName;
        userModel.salt = salt;
        userModel.universityCode = universityCode;
        userModel.save()
            .then((newUser) => {
                console.log(newUser);
                return res.status(200).send(util.success(200, "회원가입성공", newUser));
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json({
                    message: "서버 에러"
                })
            })
    },
    signIn: async (req, res) => {
        const {
            email,
            password
        } = req.body;

        //1.파라미터 체크
        if (!email || !password) {
            console.log(errData);
            return res.status(400).json({
                message: "아이디와 비밀번호를 입력 해 주세요."
            });
        }
        //2.아이디 확인
        try {
            var idCheck = await user.findOne({email: email});
            console.log(idCheck)
            if (!idCheck) {
                return res.status(200).json({
                    message: "존재하지 않는 계정 입니다."
                })
            }
        } catch (err) {
            return res.status(500).json({
                message: "아이디 체크 오류."
            })
        }

        //3.비밀번호 체크
        try {
            const userData = await user.findOne({email: email});
            const dbPw = (await encryption.encrypt(password, userData.salt)).toString('base64');
            if (dbPw == userData.password) {
                const token = await jwt.sign(userData);
                return res.status(200).json({
                    message: "로그인 완료",
                    data: token
                })
            }

            if (dbPw != password) {
                return res.status(200).json({
                    message: "비밀번호가 다릅니다."
                })
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "server error"
            })
        }
    }
}