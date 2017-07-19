import { Component, OnInit } from '@angular/core';

import { ListService } from '../../services/list.service';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-listcontainer',
  templateUrl: './listcontainer.component.html',
  styleUrls: ['./listcontainer.component.css']
})
export class ListcontainerComponent implements OnInit {

  lists: any;

  listId: String;
  listname: String;
  listItems: any;
  listItemsEmpty: String;
  listSelected: Boolean;
  listType: String;

  newlistname: String;
  newlistcreatedby: String;
  newlisttype: String;

  editListNameId: String;
  editListName: String;
  editListNameError: Boolean;
  editListNameErrorMessage: String;
  editListTitle: Boolean;

  addlistError : Boolean;
  addlistErrorMessage : String;

  newListItemName: String;
  newListItemQty: any;

  addListItemError: Boolean;
  addListItemErrorMessage: String;

  editListId: String;
  editList: Boolean;
  editListTodo: Boolean;
  editListItemName: String;
  editListItemQty: Number;
  editListItemComplete: Boolean;
  editListItemError: Boolean;
  editListItemErrorMessage: String;


  user: any;

  constructor(

    private listService: ListService,
    private validateService: ValidateService

  ) { }

  ngOnInit() {

    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);

    this.newlistcreatedby = this.user.username;

    this.listSelected = false;

    this.listService.getListsByUsername().subscribe(lists =>{

      this.lists = lists;

    }, err => {

      console.log(err);
      return false;

    });

  }

  onNewListSubmit(){

    const newlist = {

      name: this.newlistname,
      createdby: this.newlistcreatedby,
      listtype: this.newlisttype

    }

    if(!this.validateService.validateNewList(newlist)){

      this.addlistError = true;

      this.addlistErrorMessage = "Please make sure you have entered a name and selected bill type";

      return false;

    } else {

      this.listService.saveNewList(newlist).subscribe(data => {

        if(data.success){

          this.newlistname = "";
          this.newlisttype = "";
          this.addlistError = false;
          this.addlistErrorMessage = "";

          this.listService.getListsByUsername().subscribe(lists =>{

            this.lists = lists;

          }, err => {

            console.log(err);
            return false;

          });

        } else {

          this.addlistError = true;

          this.addlistErrorMessage = data.msg;


        }

      });

    };

  }

  selectList(id: String, name: String, listtype: String){

    this.listname = name;
    this.listType = listtype;
    this.listId = id;

    const listid = {

      id: id

    }

    this.listService.getListItemsByListId(listid).subscribe(listItems =>{

      if(listItems.length == 0){

        this.listItemsEmpty = "This list is currently empty, you can add to the list using the above form."
        this.listItems = "";
        this.listSelected = true;

      } else {

        this.listItemsEmpty = "";
        this.listItems = listItems;
        this.listSelected = true;

      }

    }, err => {

      console.log(err);
      return false;

    });

  }

  showEditList(id, name){

    this.editListTitle = true;
    this.editListNameId = id;
    this.editListName = name;

  }

  saveEditListName(editListId){

    let editList = {

      name: this.editListName,
      id: editListId

    }

    if(!this.validateService.validateEditListName(editList)){

      this.editListNameError = true;
      this.editListNameErrorMessage = "Please enter a Name for the list.";

    } else {

      let id = {

        id: this.editListNameId

      }

      this.listService.saveEditListName(editList).subscribe(data => {

        if(data.success){

          this.listService.getListsByUsername().subscribe(lists =>{

            this.lists = lists;
            this.editListTitle = false;

          }, err => {

            console.log(err);
            return false;

          });

        } else {

          this.editListNameError = true;
          this.editListNameErrorMessage = data.msg;

          console.log(data.msg);

        }

      })

    }

  }

  deleteList(id, name){

    let deletePopup = confirm("Are you sure you would like to delete the list, " + name + "?");

    if(deletePopup == true){

      this.listService.deleteList(id).subscribe(data => {

        if(data.success){

          this.listService.getListsByUsername().subscribe(lists =>{

            this.lists = lists;
            this.listSelected = false;
            this.listItems = '';
            this.listname = '';
            this.listItemsEmpty = '';

          }, err => {

            console.log(err);
            return false;

          });

        } else {

          console.log(data.msg);

        }

      });

    }

  }

  onNewListItemSubmitTodo(id){

    let newListItem = {


      name: this.newListItemName,
      list: id

    }

    if(!this.validateService.validateNewListItemTodo(newListItem.name)){

        this.addListItemError = true;
        this.addListItemErrorMessage = "Please enter a name for the new list item";

    } else {

      this.listService.addNewListItem(newListItem).subscribe(data => {

        if(data.success){

          this.addListItemError = false;
          this.addListItemErrorMessage = "";

          const listid = {

            id: id

          }

          this.listService.getListItemsByListId(listid).subscribe(listItems =>{

            if(listItems.length == 0){

              this.listItemsEmpty = "This list is currently empty, you can add to the list using the above form."
              this.listItems = "";

            } else {

              this.listItemsEmpty = "";
              this.listItems = listItems;
              this.listSelected = true;
              this.newListItemName = "";

            }

          }, err => {

            console.log(err);
            return false;

          });

        } else {

          this.addListItemError = true;

          this.addListItemErrorMessage = data.msg;

        }

      });

    }

  }

  onNewListItemSubmitShopping(id){

    let newListItem = {


      name: this.newListItemName,
      quantity: this.newListItemQty,
      list: id

    }

    if(!this.validateService.validateNewListItemShopping(newListItem)){

        this.addListItemError = true;
        this.addListItemErrorMessage = "Please enter a name and quantity for the new list item";

    } else {

      this.listService.addNewListItem(newListItem).subscribe(data => {

        if(data.success){

          this.addListItemError = false;
          this.addListItemErrorMessage = "";

          const listid = {

            id: id

          }

          this.listService.getListItemsByListId(listid).subscribe(listItems =>{

            if(listItems.length == 0){

              this.listItemsEmpty = "This list is currently empty, you can add to the list using the above form."
              this.listItems = "";

            } else {

              this.listItemsEmpty = "";
              this.listItems = listItems;
              this.listSelected = true;
              this.newListItemName = "";
              this.newListItemQty = '';

            }

          }, err => {

            console.log(err);
            return false;

          });

        } else {

          this.addListItemError = true;

          this.addListItemErrorMessage = data.msg;

        }

      });

    }

  }

  showEditListItem(id, name, qty){

    this.editListId = id;
    this.editListItemName = name;
    this.editListItemQty = qty;

    this.editList = true;

  }

  editListItem(editListId){

    let editListItem = {

      name: this.editListItemName,
      qty: this.editListItemQty,
      id: editListId

    }

    if(!this.validateService.validateEditListItem(editListItem)){

      this.editListItemError = true;
      this.editListItemErrorMessage = "Please enter a description for the list item";

    } else {

      let id = {

        id: this.listId

      }

      this.listService.saveEditList(editListItem).subscribe(data => {

        if(data.success){

          this.listService.getListItemsByListId(id).subscribe(listItems =>{

            this.listItemsEmpty = "";
            this.listItems = listItems;
            this.listSelected = true;
            this.editList = false;

          }, err => {

            console.log(err);
            return false;

          });

        } else {

          this.editListItemError = true;
          this.editListItemErrorMessage = data.msg;

          console.log(data.msg);

        }

      })

    }

  }

  showEditListItemTodo(id, name, complete){

    this.editListId = id;
    this.editListItemName = name;
    this.editListItemComplete = complete;

    this.editListTodo = true;

  }

  editListItemTodo(editListId){

    let editListItem = {

      name: this.editListItemName,
      complete: this.editListItemComplete,
      id: editListId

    }

    if(!this.validateService.validateEditListItem(editListItem)){

      this.editListItemError = true;
      this.editListItemErrorMessage = "Please enter a description for the list item";

    } else {

      let id = {

        id: this.listId

      }

      this.listService.saveEditListTodo(editListItem).subscribe(data => {

        if(data.success){

          this.listService.getListItemsByListId(id).subscribe(listItems =>{

            this.listItemsEmpty = "";
            this.listItems = listItems;
            this.listSelected = true;
            this.editList = false;

          }, err => {

            console.log(err);
            return false;

          });

        } else {

          this.editListItemError = true;
          this.editListItemErrorMessage = data.msg;

          console.log(data.msg);

        }

      })

    }

  }

  deleteListItem(itemid, name){

    let deletePopup = confirm("Are you sure you would like to delete the list item, " + name + "?");

    if(deletePopup == true){

      this.listService.deleteListItem(itemid).subscribe(data => {

        if(data.success){

          let id = {

            id: this.listId

          }

          this.listService.getListItemsByListId(id).subscribe(listItems =>{

            this.listItemsEmpty = "";
            this.listItems = listItems;

          }, err => {

            console.log(err);
            return false;

          });

        } else {

          console.log(data.msg);

        }

      });

    }

  }

  lowerItemQuantity(listItemId, listItemQuantity){

    let lowerItemQuantity = {

      quantity: (listItemQuantity - 1),
      id: listItemId

    }

    this.listService.changeItemQuantity(lowerItemQuantity).subscribe(data => {

      if(data.success){

        let id = {

          id: this.listId

        }

        this.listService.getListItemsByListId(id).subscribe(listItems =>{

          this.listItemsEmpty = "";
          this.listItems = listItems;

        }, err => {

          console.log(err);
          return false;

        });

      } else {

        console.log(data.msg);

      }

    });

  }

  raiseItemQuantity(listItemId, listItemQuantity){

    let raisItemQuantity = {

      quantity: (listItemQuantity + 1),
      id: listItemId

    }

    this.listService.changeItemQuantity(raisItemQuantity).subscribe(data => {

      if(data.success){

        let id = {

          id: this.listId

        }

        this.listService.getListItemsByListId(id).subscribe(listItems =>{

          this.listItemsEmpty = "";
          this.listItems = listItems;

        }, err => {

          console.log(err);
          return false;

        });

      } else {

        console.log(data.msg);

      }

    });

  }

  todoListStatus(listItemId, listItemName){

    let status = (<HTMLInputElement>document.getElementById("todoStatus" + listItemId)).checked;

    if(status == true){

      let editListItem = {

        name: listItemName,
        complete: true,
        id: listItemId

      }

      this.listService.updateTodoList(editListItem).subscribe(data => {

        if(data.success){

          document.getElementById("p" + listItemId).classList.add('itemcomplete');

        } else {

          console.log(data.msg);

        }

      });

    } else {

      let editListItem = {

        name: listItemName,
        complete: false,
        id: listItemId

      }

      this.listService.updateTodoList(editListItem).subscribe(data => {

        if(data.success){

          document.getElementById("p" + listItemId).classList.remove('itemcomplete');

        } else {

          console.log(data.msg);

        }

      });

    }

  }

}
