/* jshint esversion: 6 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ListItemSchema = mongoose.Schema({

  name: {

    type: String,
    required: true

  },

  quantity: {

    type: Number,

  },

  complete: {

    type: Boolean,

  },

  list: {

    type: String,
    required: true

  }

});

const ListItem = module.exports = mongoose.model('ListItem', ListItemSchema);

module.exports.addNewListItem = function(newListItem, callback){

  newListItem.save(callback);

};

module.exports.findListItemsByListId = function(id, callback){

  const query = { list: id };
  ListItem.find(query, callback);

};

module.exports.updateListItemTodo = function(updateItem, callback){

  let updateid = { _id : updateItem.id};
  let updateChange ={ "name": updateItem.name, "complete": updateItem.complete};

  ListItem.findOneAndUpdate(updateid, updateChange, callback);

};

module.exports.updateListItemShopping = function(updateItem, callback){

  let updateid = { _id : updateItem.id};
  let updateChange ={ "name": updateItem.name, "quantity": updateItem.quantity};

  ListItem.findOneAndUpdate(updateid, updateChange, callback);

};

module.exports.changeItemQuantity = function(updateItem, callback){

  let updateid = {_id : updateItem.id};
  let updateChange = { "quantity": updateItem.quantity };

  ListItem.findOneAndUpdate(updateid, updateChange, callback);

};

module.exports.deleteListItem = function(deleteListItem, callback){

  ListItem.findByIdAndRemove({ _id: deleteListItem}, callback);

};

module.exports.deleteListItems = function(id, callback){

  ListItem.remove({list: id}, callback);

};
