/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

const List = require('../models/list');
const ListItem = require('../models/listitem');
const config = require('../config/database');
const DeleteList = require('../models/list');

//Create new list

router.post('/newlist', (req, res, next) => {

  let newList = new List({

    name: req.body.name,
    createdby: req.body.createdby,
    listtype: req.body.listtype

  });

  List.addNewList(newList, (err, list) => {

    if(err){

      res.json({success: false, msg: err});

    } else {

      res.json({success: true, msg: 'New list added'});

    }

  });

});

//Find users lists

router.post('/allLists', (req, res, next) => {

  let createdby = req.body.createdby;

  List.findListsByUser(createdby, (err, lists) => {

    if(err){

      res.json({success: false, msg: err});

    } else {

      res.json(lists);

    }

  });

});

//Find list details

router.post('/list', (req, res, next) => {

  let getListDetails = {
    id: req.body.id
  };

  List.findListByListId(getListDetails, (err, list) => {

    if(err){

      res.json({success: false, msg: err});

    } else {

      if(list.length === 0){

      res.json('No list found');

      } else {

        ListItem.findListItemsByListId(getListDetails.id, (err, listitems) => {

          if(err){

            res.json({success: false, msg: err});

          } else {

            res.json(listitems);

          }

        });

      }

    }

  });

});

//Change List name

router.patch('/updatelistname/:id', (req, res, next) => {

  let updateList = {

    id: req.params.id,
    listname: req.body.listname

  };

  List.updateListName(updateList, (err, list) => {

    if(err){

      res.json({ success: false, msg: err});

    } else {

      res.json({ success: true, msg: 'List Name Updated'});

    }

  });

});

//Delete List

router.delete('/deletelist/:id', (req, res, next) => {

  let id = req.params.id;

  List.deleteList(id, (err) =>{

    if(err){

      res.json({success: false, msg: err});

    } else {

      ListItem.deleteListItems(id, (err) => {

        if(err){

          res.json({succes: false, msg: err});

        } else {

          res.json({success: true, msg: 'List Has Been Deleted'});

        }

      });

    }

  });

});

//Add New List Item

router.post('/newlistitem', (req, res, next) => {

  let newListItem = new ListItem({

    name: req.body.name,
    quantity: req.body.quantity,
    complete: 'false',
    list: req.body.list

  });

  ListItem.addNewListItem(newListItem, (err, list) => {

    if(err){

      res.json({success: false, msg: err});

    } else {

      res.json({success: true, msg: 'New list item added'});

    }

  });

});

//Update List Item for ToDo

router.patch('/updatelistitemtodo/:id', (req, res, next) => {

  let updateItem = {

    id: req.params.id,
    name: req.body.name,
    complete: req.body.complete

  };

  ListItem.updateListItemTodo(updateItem, (err, list) => {

    if(err){

      res.json({ success: false, msg: err});

    } else {

      res.json({ success: true, msg: 'List Item Updated'});

    }

  });

});

//Update List Item for Shopping

router.patch('/updatelistitemshopping/:id', (req, res, next) => {

  let updateItem = {

    id: req.params.id,
    name: req.body.name,
    quantity: req.body.quantity

  };

  ListItem.updateListItemShopping(updateItem, (err, list) => {

    if(err){

      res.json({ success: false, msg: err});

    } else {

      res.json({ success: true, msg: 'List Item Updated'});

    }

  });

});

//Update Quantity for Shopping Item

router.patch('/changelistitemquantity/:id', (req, res, next) => {

  let updateItem = {

    id: req.params.id,
    quantity: req.body.quantity

  };

  ListItem.changeItemQuantity(updateItem, (err, item) => {

    if(err){

      res.json({ success: false, msg: err});

    } else {

      res.json({ success: true, msg: 'List Item Updated'});

    }

  });

});

//Delete List Item

router.delete('/deletelistitem/:id', (req, res, next) => {

  let id = req.params.id;

  ListItem.deleteListItem(id, (err) =>{

    if(err){

      res.json({success: false, msg: err});

    } else {

      res.json({success: true, msg: 'List Item Has Been Deleted'});

    }

  });

});

module.exports = router;
