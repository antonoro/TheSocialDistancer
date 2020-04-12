const express = require('express');
const passport = require('passport');
const router = express.Router();

const mu = require("../db/MongoUtils.js");
  
router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

  
router.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

router.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });

  router.get('/getUser', (req, res) => {
    return res.json(req.user || null);
  });

  router.post('/register', 
    function(req,res){
      console.log('received post from register with username: ', req.body.username);
      const user = {
        username: req.body.username, 
        email: req.body.email,
        password: req.body.confirmpassword
      };
      mu.verifyNewUser(user).then(bool => {
        if(bool === false)
        {
          res.redirect('/fail');
          console.log("Username or email are not available. Enter different credentials.");
        }
        else{
          res.redirect('/');
          console.log("Bla bla");
        }
      });
    }
  );

  module.exports = router;