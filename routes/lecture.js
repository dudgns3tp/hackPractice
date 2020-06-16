var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');
const univController = require('../controllers/university');
const lectureController = require('../controllers/lecture');
const authUtil = require('../module/authUtil');

router.post('/addLecture', lectureController.addLecture);

module.exports = router;