var express = require('express');
const User = require('../models/user');
const bodyParser = require('body-parser');
var router = express.Router();
var passport = require('passport');
var authenticate = require('../authenticate');
const cors = require('./cors');
const user = require('../models/user');


router.use(bodyParser.json());

router.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
/* GET User listing. */
router.route('/')

  .get(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, function (req, res, next) {
    User.find({})
      .then((users) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', "text/plain");
        res.json(users);
      })
      .catch((err) => next(err));

  });

router.post('/signup', cors.corsWithOptions, (req, res, next) => {
  User.register(new User({ username: req.body.username, email: req.body.email, dob: req.body.dob, contact_num: req.body.contact_num }), req.body.password, (err, user) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', "application/json");
      res.json({ err: err });
    }
    else {
      if (req.body.firstname)
        user.firstname = req.body.firstname;
      if (req.body.lastname)
        user.lastname = req.body.lastname;
      if (req.body.gender)
        if (req.body.gender.toLowerCase() === "male")
          user.gender = 0;
        else if (req.body.gender.toLowerCase() === "female")
          user.gender = 1;
      if (req.body.city)
        user.city = req.body.city;
      if (req.body.doctor) {
        user.doctor = true;
        if (req.body.designation)
          user.designation = req.body.designation;
        if (req.body.hospital)
          user.hospital = req.body.hospital;
      }
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', "application/json");
          res.json({ err: err });
          return;
        }
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', "application/json");
          res.json({ status: "Registration Successful", sucess: true })
        });
      });

    }
  });

});


router.post('/login', cors.corsWithOptions, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err)
      return next(err);
    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', "application/json");
      res.json({ success: false, status: "Login Unsuccessfull", err: info });
    }
    req.logIn(user, (err) => {
      if (err) {
        res.statusCode = 401;
        res.setHeader('Content-Type', "application/json");
        res.json({ success: false, status: "Login Unsuccessfull", err: "Could not log in user!" });
      }
      var token = authenticate.getToken({ _id: req.user._id });
      res.statusCode = 200;
      res.setHeader('Content-Type', "application/json");
      res.json({ success: true, token: token, status: "Login Successfull!" });
    })
  })(req, res, next);


});

router.get('/logout', cors.cors, (req, res) => {

  req.logOut();
  res.clearCookie('session-id');
  res.redirect('/');

});



router.get('/checkJWTToken', cors.corsWithOptions, (req, res) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err)
      return next(err);
    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', "application/json");
      res.json({ success: false, status: "JWT invalid", err: info });
    }
    else {
      res.statusCode = 401;
      res.setHeader('Content-Type', "application/json");
      res.json({ success: true, status: "JWT valid", user: user });
    }
  })(req, res);
});

module.exports = router;
