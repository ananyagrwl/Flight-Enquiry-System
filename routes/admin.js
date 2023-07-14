var express = require('express');
var router = express.Router();
var pool = require("./pool");
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

router.get('/', function (req, res) {
  res.render('login', {message:""});
});

router.get('/logout', function (req, res) {
  localStorage.clear();
  res.render('login', {message:""});
});

router.post('/chkadminpassword', function (req, res) {
  pool.query("select * from administrator where (emailid=? or mobile=?) and password=?", [req.body.email_mobile,req.body.email_mobile, req.body.pwd], function(error, result){
    if(error){
      res.render("login", {message:"Server Error"})
    }
    else{
      if(result.length==1){
        localStorage.setItem("ADMIN", JSON.stringify(result[0]))
        res.render("dashboard", {data:result[0]})
      }
      else{
        res.render("login", {message:"Incorrect email/password"})
      }
    }
  })
  
});


module.exports = router;