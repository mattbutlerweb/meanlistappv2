/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config/database');

//Register

router.post('/register', (req, res, next) => {

  let newUser = new User({

    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password

  });

  User.addUser(newUser, (err, user) => {

    if(err == 'usernameexists'){

      res.json({success: false, msg: 'A user with the same Username already exists, please choose another Username.'});

    } else if (err == 'emailexists') {

      res.json({success: false, msg: 'A user with the same Email already exists, please choose another Email or if the Email is yours, please log in.'});

    } else if (err) {

      res.json({success: false, msg: 'Failed to register user'});

    } else {

      res.json({success: true, msg: 'User Registered'});

    }

  });

});

//Authenticate

router.post('/authenticate', (req, res, next) => {

  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {

    if(err) throw err;

    if(!user){

      return res.json({success: false, msg: 'User not found'});

    }

    User.comparePassword(password, user.password, (err, isMatch) => {

      if(err) throw err;

      if(isMatch){

        const token = jwt.sign(user, config.secret, {

          expiresIn: 604800, //Expires the token after 1 week

        });

        res.json({

          success: true,
          token: 'JWT ' + token,
          user: {

            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email

          }

        });

      } else {

        return res.json({success: false, msg: 'Wrong Password'});

      }

    });

  });

});

//Profile

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {

  res.json({user: req.user});

});

//Update User Details

router.patch('/updateuser/:id', (req, res, next) => {

  let updateUser = {

    id: req.params.id,
    name: req.body.name,
    email: req.body.email

  };

  User.updateUser(updateUser, (err, user) => {

    if(err){

      res.json({ success: false, msg: err});

    } else {

      res.json({ success: true, msg: 'User Updated'});

    }

  });

});

//Update User Password

router.patch('/updateuserpassword/:id', (req, res, next) => {

  let updateUser = {

    id: req.params.id,
    password: req.body.password

  };

  User.updateUserPassword(updateUser, (err, user) => {

    if(err){

      res.json({ success: false, msg: err});

    } else {

      res.json({ success: true, msg: 'User Password Updated'});

    }

  });

});

module.exports = router;
