var express = require('express');
var router = express.Router();
var fs= require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.ip);
  fs.appendFile("list",req.ip+"\n"+req.connection.remoteAddress+"\n",(err)=>{
    if(err) throw err;
    console.log("Saved")
  });

  console.log(req.connection.remoteAddress);  
  res.render('index');
});

module.exports = router;
  