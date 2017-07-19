import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

  lists : any;
  user: any;
  createdby: any;

  constructor(
    private http: Http,

  ) { }

  getListsByUsername(){

    let headers = new Headers();

    this.loadUser();

    const createdby = { createdby: this.user.username};

    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/lists/alllists', createdby, {headers: headers})
      .map(res => res.json());

  }

  getListItemsByListId(id){

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/lists/list',id,  {headers: headers})
      .map(res => res.json());

  }

  addNewListItem(item){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/lists/newlistitem', item, {headers: headers})
      .map(res => res.json());

  }

  deleteListItem(id){

    let headers = new Headers();

    return this.http.delete('http://localhost:3000/lists/deletelistitem/' + id, {headers: headers})
      .map(res => res.json());

  }

  saveNewList(newlist){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/lists/newlist', newlist, {headers: headers})
      .map(res => res.json());

  }

  saveEditListName(editList){

    let editListNew = {

      listname: editList.name

    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.patch('http://localhost:3000/lists/updatelistname/' + editList.id, editListNew, {headers: headers})
      .map(res => res.json());

  }

  deleteList(id){

    let headers = new Headers();

    return this.http.delete('http://localhost:3000/lists/deletelist/' + id, {headers: headers})
      .map(res => res.json());

  }

  saveEditList(editList){

    let editListNew = {

      name: editList.name,
      quantity: editList.qty

    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.patch('http://localhost:3000/lists/updatelistitemshopping/' + editList.id, editListNew, {headers: headers})
      .map(res =>res.json());

  }

  saveEditListTodo(editListItem){

    let editListNew = {

      name: editListItem.name,
      complete: editListItem.complete

    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.patch('http://localhost:3000/lists/updatelistitemtodo/' + editListItem.id, editListNew, {headers:headers})
      .map(res => res.json());

  }

  changeItemQuantity(raiseItemQuantity){

    let raiseItem = {

      quantity: raiseItemQuantity.quantity

    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.patch('http://localhost:3000/lists/changelistitemquantity/' + raiseItemQuantity.id, raiseItem, {headers:headers})
      .map(res => res.json());

  }

  updateTodoList(editListItem){

    let updateListTodoNew = {

      name: editListItem.name,
      complete: editListItem.complete

    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.patch('http://localhost:3000/lists/updatelistitemtodo/' + editListItem.id, updateListTodoNew, {headers: headers})
      .map(res => res.json());

  }

  loadUser(){

    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);

  }


}
