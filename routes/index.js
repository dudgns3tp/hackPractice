var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req,res)=> {
  res.sendFile(__dirname+'/index.html');
});

router.use('/user',require('./user'));
router.use('/action', require('./action'));
module.exports = router;
