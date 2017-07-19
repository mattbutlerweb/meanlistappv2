/* jshint esversion: 6 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ListSchema = mongoose.Schema({

  name: {

    type: String,
    required: true

  },
  createdby: {

    type: String,
    required: true

  },
  listtype: {

    type: String,
    required: true

  },
  id: {
    type: mongoose.Schema.ObjectId,
    ref:'id'
  }

});

const List = module.exports = mongoose.model('List', ListSchema);

module.exports.addNewList = function(newList, callback){

  List.findOne({ "name": newList.name, "createdby": newList.createdby}, (err, list) => {

    if(list !== null || list === []){

      callback("A List with that name already exists");

    } else {

      newList.save(callback);

    }

  });

};

module.exports.findListsByUser = function(createdby, callback){

  const query = { createdby: createdby };
  List.find(query,callback);

};

/*module.exports.findListByListName = function(getListDetails, callback){

  List.find({ "name": getListDetails.name, "createdby": getListDetails.createdby}, callback);

};*/

module.exports.findListByListId = function(getListDetails, callback){

  List.find({ _id: getListDetails.id }, callback);

};

module.exports.updateListName = function(updateList, callback){

  const updateid = { _id : updateList.id};
  const name ={ name: updateList.listname};

  List.findOneAndUpdate(updateid, name, callback);

};

module.exports.deleteList = function(deleteList, callback){

  List.findByIdAndRemove({ _id: deleteList}, callback);

};
