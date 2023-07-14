var express = require('express');
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

/* GET home page. */
router.get('/', function (req, res) {
  var admin = JSON.parse(localStorage.getItem("ADMIN"))
  if (admin) {res.render('index', { message: "" });}
  else {res.render('login', { message: "" });}
});


router.post('/submit', upload.single("logo"), function (req, res) {
  var days = ("" + req.body.days).replaceAll("'", '"')
  // console.log(req.body)
  // console.log(req.file)
  // console.log("days", req.body.days)
  pool.query("insert into flightdetails (fname, type, seats, days, scity, dtime, dcity, atime, company, logo) values (?,?,?,?,?,?,?,?,?,?)", [req.body.fname, req.body.type, req.body.seats, days, req.body.scity, req.body.dtime, req.body.dcity, req.body.atime, req.body.company, req.file.originalname], function (error, result) {
    if (error) {
      console.log(error)
      res.render('index', { message: "Server Error" })
    }
    else { res.render('index', { message: "Record submitted successfully" }) }
  })
})


// making pure api 
// 400: server not found(no internet), 404:page not found, 
router.get('/cities', function (req, res) {
  pool.query("select * from cities", function (error, result) {
    if (error) { res.status(500).json({ result: [], message: "Server error" }) }
    else { res.status(200).json({ result: result, message: "Sucess" }) }
  })
})


router.get('/display', function (req, res) {

  var admin = JSON.parse(localStorage.getItem("ADMIN"))
  if (!admin) res.render('login', { message: "" })
  else
    {pool.query("select F.*,(select C.cname from cities C where C.cid=F.scity) as source, (select C.cname from cities C where C.cid=F.dcity) as destination from flightdetails F", function (error, result) {
      if (error) {
        // console.log(error)
        res.render('display', { data: [], message: "Server Error" })
      }
      else {
        // console.log(result)
        res.render('display', { data: result, message: "Success" })
      }
    })
  }
});


router.get('/searchbyid', function (req, res) {
  pool.query("select F.*,(select C.cname from cities C where C.cid=F.scity) as source, (select C.cname from cities C where C.cid=F.dcity) as destination from flightdetails F where fid=?", [req.query.flightid], function (error, result) {
    if (error) {
      // console.log(error)
      res.render('edit', { data: [], message: "Server Error" })
    }
    else {
      // console.log(result)
      res.render('edit', { 'data': result[0], 'message': "Success" })
    }
  })
});

router.get('/searchbyidforimage', function (req, res) {
  pool.query("select F.*,(select C.cname from cities C where C.cid=F.scity) as source, (select C.cname from cities C where C.cid=F.dcity) as destination from flightdetails F where fid=?", [req.query.flightid], function (error, result) {
    if (error) {
      console.log(error)
      res.render('showimage', { data: [], message: "Server Error" })
    }
    else {
      // console.log(result)
      res.render('showimage', { 'data': result[0], 'message': "Success" })
    }
  })
});

router.post('/editimage', upload.single("logo"), function (req, res) {
  // console.log(req.file)
  // console.log(req.body)
  pool.query("update flightdetails set logo=? where fid=?", [req.file.originalname, req.body.fid], function (error, result) {
    if (error) {
      // console.log(error)
      res.redirect('/flight/display')
    }
    else {
      // console.log(result)
      res.redirect('/flight/display')
    }
  })
})


router.post('/edit_delete', function (req, res) {

  if (req.body.btn == "Edit") {
    var days = ("" + req.body.days).replaceAll("'", '"')
    pool.query("update flightdetails set fname=?, type=?, seats=?, days=?, scity=?, dtime=?, dcity=?, atime=?, company=? where fid=?", [req.body.fname, req.body.type, req.body.seats, days, req.body.scity, req.body.dtime, req.body.dcity, req.body.atime, req.body.company, req.body.fid], function (error, result) {
      if (error) {
        console.log(error)
        res.redirect('/flight/display')
      }
      else { res.redirect('/flight/display') }
    })
  }
  else {
    pool.query("delete from flightdetails where fid=?", [req.body.fid], function (error, result) {
      if (error) {
        res.redirect('/flight/display')
      }
      else { res.redirect('/flight/display') }
    })
  }
})

module.exports = router;
