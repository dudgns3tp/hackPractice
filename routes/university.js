var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');
const univController = require('../controllers/university');
const authUtil = require('../module/authUtil');

router.post('/addUniv', univController.addUniversity);

module.exports = router;