var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');
const authUtil = require('../module/authUtil');
// const multer = require('multer');
// const upload = multer({
//   dest: 'uploads/'
// });

const upload = require('../module/multer');

// POST METHOD - {{url}}/user/profile
router.post('/profile', upload.single('image'), userController.uploadImage);

// POST METHOD - {{url}}/user/selfies
router.post('/selfies', upload.array('image', 4), userController.uploadImages);

router.post('/signup', userController.signUp);
router.post('/signin',userController.signIn);
module.exports = router;