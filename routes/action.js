var express = require('express');
var router = express.Router();
const actionController = require('../controllers/action');
router.get('/', actionController.isSoldOut);

module.exports = router;