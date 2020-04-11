const express = require('express');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const db = require('./db');
const mu = require('./db/MongoUtils.js')


// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
    
    function(username, password, cb) {
        console.log("strategy", username, password);  
        mu.findUser(username, function(err, user) {
        if (err) { 
            return cb(err); 
        }
        if (!user) {
            console.log("User not found."); 
            return cb(null, false); // No user, return false
        }
        if (user.password != password) { 
            console.log("Password incorrect");
            return cb(null, false); // wrong password, return false
        }
        console.log("User found. Password correct");
        return cb(null, user);
      });
    }));


passport.serializeUser(function(user, cb) {
    cb(null, user.username);
  });
  
  passport.deserializeUser(function(username, cb) {
    mu.findUser(username, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

const ConfigurePassport = (app) => {  
    // Use application-level middleware for common functionality, including
    // logging, parsing, and session handling.
    app.use(require('body-parser').urlencoded({ extended: true }));
    app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

    // Initialize Passport and restore authentication state, if any, from the
    // session.
    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = ConfigurePassport;