/* jshint esversion: 6 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//UserSchema

const UserSchema = mongoose.Schema({

  name: {

    type: String,
    required: true

  },
  email: {

    type:String,
    required: true

  },
  username: {

    type: String,
    required: true

  },
  password: {

    type: String,
    required: true

  }

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){

  User.findById(id, callback);

};

module.exports.getUserByUsername = function(username, callback){

  const query = { username: username};
  User.findOne(query, callback);

};

module.exports.addUser = function(newUser, callback){

  User.findOne({username: newUser.username}, (err, user) => {

    if(user){

      callback('usernameexists');

    } else {

      User.findOne({email: newUser.email}, (err, user) => {

        if(user){

          callback('emailexists');

        } else {

          bcrypt.genSalt(10, (err, salt) => {

            bcrypt.hash(newUser.password, salt, (err, hash) => {

              if(err) throw err;

              newUser.password = hash;
              newUser.save(callback);

            });

          });

        }

      });

    }

  });

};

module.exports.comparePassword = function(candidatePassword, hash, callback){

  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {

    if(err) throw err;
    callback(null, isMatch);

  });

};

module.exports.updateUser = function(updateUser, callback){

  let updateid = { _id : updateUser.id};
  let updateuser ={ "name": updateUser.name, "email": updateUser.email};

  User.findOneAndUpdate(updateid, updateuser, callback);

};

module.exports.updateUserPassword = function(updateUser, callback){

  let updateid = { _id : updateUser.id};

  bcrypt.genSalt(10, (err, salt) => {

    bcrypt.hash(updateUser.password, salt, (err, hash) => {

      if(err) throw err;

      updateUser.password = hash;
      User.findOneAndUpdate(updateid, { password: updateUser.password}, callback);

    });

  });

};
