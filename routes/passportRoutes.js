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

  router.get('/getUser', (req, res) => {
    return res.json(req.user || null);
  });

  router.post('/savegame', 
    function(req, res){
      console.log('received post from savegame with username: ', req.body.username);
      mu.addGameData(req.body);
      res.redirect('/');
    }
  );

  router.post('/register', 
    function(req,res){
      //deconstruct req.body
      const {username, email, confirmpassword} = req.body;
      console.log('received post from register with username: ', username);
      const user = {
        username, 
        email,
        password: confirmpassword
      };
      mu.verifyNewUser(user, (answer) => {
        if(answer === null)
        {
          res.json(null);
          console.log("From router: Username or email are not available. Enter different credentials.");
        }
        else{
          res.json({valid: true});
          console.log("From router: Account available");
        }
      })
    }
  );

  module.exports = router;
