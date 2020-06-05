var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user');
// const multer = require('multer');
// const upload = multer({
//   dest: 'uploads/'
// });

const upload = require('../module/multer');

// POST METHOD - {{url}}/user/profile
router.post('/profile', upload.single('image'), UserController.uploadImage);

// POST METHOD - {{url}}/user/selfies
router.post('/selfies', upload.array('image', 4), UserController.uploadImages);

module.exports = router;