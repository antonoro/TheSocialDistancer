const express = require('express');
const passport = require('passport');
const router = express.Router();
const axios = require('axios');

const mu = require("../db/MongoUtils.js");

router.get('/login',
  function(req, res){
    res.render('login');
  });
  
router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/guest', 
  function(req, res){

    const userdata = {
      username: 'guest', 
      email: 'guest@guest.com', 
      password: 'guest1'
    };
    res.redirect('/', { user: userdata });
  }
);  
  
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
      mu.addUser(user).then(res.redirect("/"));
    }
  );

  module.exports = router;