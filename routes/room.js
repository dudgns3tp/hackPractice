var express = require('express');
var router = express.Router();
const chatControllers = require('../controllers/chat');
const authUtil = require('../module/authUtil');

/* GET home page. */
router.get('/', authUtil.LoggedIn, chatControllers.chatInit);
router.post('/:room/chat', chatControllers.chatting);
module.exports = router;
