webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/auth.service.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateAddNewListItem = function (item) {
        if (item.name == undefined || item.description == undefined || item.quantity == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateNewList = function (newlist) {
        if (newlist.name == undefined || newlist.listtype == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEditListName = function (editList) {
        if (editList.name == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateNewListItemTodo = function (newListItem) {
        if (newListItem == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateNewListItemShopping = function (newListItem) {
        if (newListItem.name == undefined || newListItem.quantity == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEditListItem = function (editListItem) {
        if (editListItem.name == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/validate.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListService = (function () {
    function ListService(http) {
        this.http = http;
    }
    ListService.prototype.getListsByUsername = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadUser();
        var createdby = { createdby: this.user.username };
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/lists/alllists', createdby, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.getListItemsByListId = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/lists/list', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.addNewListItem = function (item) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/lists/newlistitem', item, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.deleteListItem = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.delete('http://localhost:3000/lists/deletelistitem/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.saveNewList = function (newlist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/lists/newlist', newlist, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.saveEditListName = function (editList) {
        var editListNew = {
            listname: editList.name
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch('http://localhost:3000/lists/updatelistname/' + editList.id, editListNew, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.deleteList = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.delete('http://localhost:3000/lists/deletelist/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.saveEditList = function (editList) {
        var editListNew = {
            name: editList.name,
            quantity: editList.qty
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch('http://localhost:3000/lists/updatelistitemshopping/' + editList.id, editListNew, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.saveEditListTodo = function (editListItem) {
        var editListNew = {
            name: editListItem.name,
            complete: editListItem.complete
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch('http://localhost:3000/lists/updatelistitemtodo/' + editListItem.id, editListNew, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.changeItemQuantity = function (raiseItemQuantity) {
        var raiseItem = {
            quantity: raiseItemQuantity.quantity
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch('http://localhost:3000/lists/changelistitemquantity/' + raiseItemQuantity.id, raiseItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.updateTodoList = function (editListItem) {
        var updateListTodoNew = {
            name: editListItem.name,
            complete: editListItem.complete
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch('http://localhost:3000/lists/updatelistitemtodo/' + editListItem.id, updateListTodoNew, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.loadUser = function () {
        var user = localStorage.getItem('user');
        this.user = JSON.parse(user);
    };
    ListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ListService);
    return ListService;
    var _a;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/list.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(507);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(679),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_listcontainer_listcontainer_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_list_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(515);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var appRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'login/:message',
        component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */]
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_listcontainer_listcontainer_component__["a" /* ListcontainerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_15__services_list_service__["a" /* ListService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(680),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(681),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/footer.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(682),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/header.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(683),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/home.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListcontainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListcontainerComponent = (function () {
    function ListcontainerComponent(listService, validateService) {
        this.listService = listService;
        this.validateService = validateService;
    }
    ListcontainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem('user');
        this.user = JSON.parse(user);
        this.newlistcreatedby = this.user.username;
        this.listSelected = false;
        this.listService.getListsByUsername().subscribe(function (lists) {
            _this.lists = lists;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ListcontainerComponent.prototype.onNewListSubmit = function () {
        var _this = this;
        var newlist = {
            name: this.newlistname,
            createdby: this.newlistcreatedby,
            listtype: this.newlisttype
        };
        if (!this.validateService.validateNewList(newlist)) {
            this.addlistError = true;
            this.addlistErrorMessage = "Please make sure you have entered a name and selected bill type";
            return false;
        }
        else {
            this.listService.saveNewList(newlist).subscribe(function (data) {
                if (data.success) {
                    _this.newlistname = "";
                    _this.newlisttype = "";
                    _this.addlistError = false;
                    _this.addlistErrorMessage = "";
                    _this.listService.getListsByUsername().subscribe(function (lists) {
                        _this.lists = lists;
                    }, function (err) {
                        console.log(err);
                        return false;
                    });
                }
                else {
                    _this.addlistError = true;
                    _this.addlistErrorMessage = data.msg;
                }
            });
        }
        ;
    };
    ListcontainerComponent.prototype.selectList = function (id, name, listtype) {
        var _this = this;
        this.listname = name;
        this.listType = listtype;
        this.listId = id;
        var listid = {
            id: id
        };
        this.listService.getListItemsByListId(listid).subscribe(function (listItems) {
            if (listItems.length == 0) {
                _this.listItemsEmpty = "This list is currently empty, you can add to the list using the above form.";
                _this.listItems = "";
                _this.listSelected = true;
            }
            else {
                _this.listItemsEmpty = "";
                _this.listItems = listItems;
                _this.listSelected = true;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ListcontainerComponent.prototype.showEditList = function (id, name) {
        this.editListTitle = true;
        this.editListNameId = id;
        this.editListName = name;
    };
    ListcontainerComponent.prototype.saveEditListName = function (editListId) {
        var _this = this;
        var editList = {
            name: this.editListName,
            id: editListId
        };
        if (!this.validateService.validateEditListName(editList)) {
            this.editListNameError = true;
            this.editListNameErrorMessage = "Please enter a Name for the list.";
        }
        else {
            var id = {
                id: this.editListNameId
            };
            this.listService.saveEditListName(editList).subscribe(function (data) {
                if (data.success) {
                    _this.listService.getListsByUsername().subscribe(function (lists) {
                        _this.lists = lists;
                        _this.editListTitle = false;
                    }, function (err) {
                        console.log(err);
                        return false;
                    });
                }
                else {
                    _this.editListNameError = true;
                    _this.editListNameErrorMessage = data.msg;
                    console.log(data.msg);
                }
            });
        }
    };
    ListcontainerComponent.prototype.deleteList = function (id, name) {
        var _this = this;
        var deletePopup = confirm("Are you sure you would like to delete the list, " + name + "?");
        if (deletePopup == true) {
            this.listService.deleteList(id).subscribe(function (data) {
                if (data.success) {
                    _this.listService.getListsByUsername().subscribe(function (lists) {
                        _this.lists = lists;
                        _this.listSelected = false;
                        _this.listItems = '';
                        _this.listname = '';
                        _this.listItemsEmpty = '';
                    }, function (err) {
                        console.log(err);
                        return false;
                    });
                }
                else {
                    console.log(data.msg);
                }
            });
        }
    };
    ListcontainerComponent.prototype.onNewListItemSubmitTodo = function (id) {
        var _this = this;
        var newListItem = {
            name: this.newListItemName,
            list: id
        };
        if (!this.validateService.validateNewListItemTodo(newListItem.name)) {
            this.addListItemError = true;
            this.addListItemErrorMessage = "Please enter a name for the new list item";
        }
        else {
            this.listService.addNewListItem(newListItem).subscribe(function (data) {
                if (data.success) {
                    _this.addListItemError = false;
                    _this.addListItemErrorMessage = "";
                    var listid = {
                        id: id
                    };
                    _this.listService.getListItemsByListId(listid).subscribe(function (listItems) {
                        if (listItems.length == 0) {
                            _this.listItemsEmpty = "This list is currently empty, you can add to the list using the above form.";
                            _this.listItems = "";
                        }
                        else {
                            _this.listItemsEmpty = "";
                            _this.listItems = listItems;
                            _this.listSelected = true;
                            _this.newListItemName = "";
                        }
                    }, function (err) {
                        console.log(err);
                        return false;
                    });
                }
                else {
                    _this.addListItemError = true;
                    _this.addListItemErrorMessage = data.msg;
                }
            });
        }
    };
    ListcontainerComponent.prototype.onNewListItemSubmitShopping = function (id) {
        var _this = this;
        var newListItem = {
            name: this.newListItemName,
            quantity: this.newListItemQty,
            list: id
        };
        if (!this.validateService.validateNewListItemShopping(newListItem)) {
            this.addListItemError = true;
            this.addListItemErrorMessage = "Please enter a name and quantity for the new list item";
        }
        else {
            this.listService.addNewListItem(newListItem).subscribe(function (data) {
                if (data.success) {
                    _this.addListItemError = false;
                    _this.addListItemErrorMessage = "";
                    var listid = {
                        id: id
                    };
                    _this.listService.getListItemsByListId(listid).subscribe(function (listItems) {
                        if (listItems.length == 0) {
                            _this.listItemsEmpty = "This list is currently empty, you can add to the list using the above form.";
                            _this.listItems = "";
                        }
                        else {
                            _this.listItemsEmpty = "";
                            _this.listItems = listItems;
                            _this.listSelected = true;
                            _this.newListItemName = "";
                            _this.newListItemQty = '';
                        }
                    }, function (err) {
                        console.log(err);
                        return false;
                    });
                }
                else {
                    _this.addListItemError = true;
                    _this.addListItemErrorMessage = data.msg;
                }
            });
        }
    };
    ListcontainerComponent.prototype.showEditListItem = function (id, name, qty) {
        this.editListId = id;
        this.editListItemName = name;
        this.editListItemQty = qty;
        this.editList = true;
    };
    ListcontainerComponent.prototype.editListItem = function (editListId) {
        var _this = this;
        var editListItem = {
            name: this.editListItemName,
            qty: this.editListItemQty,
            id: editListId
        };
        if (!this.validateService.validateEditListItem(editListItem)) {
            this.editListItemError = true;
            this.editListItemErrorMessage = "Please enter a description for the list item";
        }
        else {
            var id_1 = {
                id: this.listId
            };
            this.listService.saveEditList(editListItem).subscribe(function (data) {
                if (data.success) {
                    _this.listService.getListItemsByListId(id_1).subscribe(function (listItems) {
                        _this.listItemsEmpty = "";
                        _this.listItems = listItems;
                        _this.listSelected = true;
                        _this.editList = false;
                    }, function (err) {
                        console.log(err);
                        return false;
                    });
                }
                else {
                    _this.editListItemError = true;
                    _this.editListItemErrorMessage = data.msg;
                    console.log(data.msg);
                }
            });
        }
    };
    ListcontainerComponent.prototype.showEditListItemTodo = function (id, name, complete) {
        this.editListId = id;
        this.editListItemName = name;
        this.editListItemComplete = complete;
        this.editListTodo = true;
    };
    ListcontainerComponent.prototype.editListItemTodo = function (editListId) {
        var _this = this;
        var editListItem = {
            name: this.editListItemName,
            complete: this.editListItemComplete,
            id: editListId
        };
        if (!this.validateService.validateEditListItem(editListItem)) {
            this.editListItemError = true;
            this.editListItemErrorMessage = "Please enter a description for the list item";
        }
        else {
            var id_2 = {
                id: this.listId
            };
            this.listService.saveEditListTodo(editListItem).subscribe(function (data) {
                if (data.success) {
                    _this.listService.getListItemsByListId(id_2).subscribe(function (listItems) {
                        _this.listItemsEmpty = "";
                        _this.listItems = listItems;
                        _this.listSelected = true;
                        _this.editList = false;
                    }, function (err) {
                        console.log(err);
                        return false;
                    });
                }
                else {
                    _this.editListItemError = true;
                    _this.editListItemErrorMessage = data.msg;
                    console.log(data.msg);
                }
            });
        }
    };
    ListcontainerComponent.prototype.deleteListItem = function (itemid, name) {
        var _this = this;
        var deletePopup = confirm("Are you sure you would like to delete the list item, " + name + "?");
        if (deletePopup == true) {
            this.listService.deleteListItem(itemid).subscribe(function (data) {
                if (data.success) {
                    var id = {
                        id: _this.listId
                    };
                    _this.listService.getListItemsByListId(id).subscribe(function (listItems) {
                        _this.listItemsEmpty = "";
                        _this.listItems = listItems;
                    }, function (err) {
                        console.log(err);
                        return false;
                    });
                }
                else {
                    console.log(data.msg);
                }
            });
        }
    };
    ListcontainerComponent.prototype.lowerItemQuantity = function (listItemId, listItemQuantity) {
        var _this = this;
        var lowerItemQuantity = {
            quantity: (listItemQuantity - 1),
            id: listItemId
        };
        this.listService.changeItemQuantity(lowerItemQuantity).subscribe(function (data) {
            if (data.success) {
                var id = {
                    id: _this.listId
                };
                _this.listService.getListItemsByListId(id).subscribe(function (listItems) {
                    _this.listItemsEmpty = "";
                    _this.listItems = listItems;
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
            else {
                console.log(data.msg);
            }
        });
    };
    ListcontainerComponent.prototype.raiseItemQuantity = function (listItemId, listItemQuantity) {
        var _this = this;
        var raisItemQuantity = {
            quantity: (listItemQuantity + 1),
            id: listItemId
        };
        this.listService.changeItemQuantity(raisItemQuantity).subscribe(function (data) {
            if (data.success) {
                var id = {
                    id: _this.listId
                };
                _this.listService.getListItemsByListId(id).subscribe(function (listItems) {
                    _this.listItemsEmpty = "";
                    _this.listItems = listItems;
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
            else {
                console.log(data.msg);
            }
        });
    };
    ListcontainerComponent.prototype.todoListStatus = function (listItemId, listItemName) {
        var status = document.getElementById("todoStatus" + listItemId).checked;
        if (status == true) {
            var editListItem = {
                name: listItemName,
                complete: true,
                id: listItemId
            };
            this.listService.updateTodoList(editListItem).subscribe(function (data) {
                if (data.success) {
                    document.getElementById("p" + listItemId).classList.add('itemcomplete');
                }
                else {
                    console.log(data.msg);
                }
            });
        }
        else {
            var editListItem = {
                name: listItemName,
                complete: false,
                id: listItemId
            };
            this.listService.updateTodoList(editListItem).subscribe(function (data) {
                if (data.success) {
                    document.getElementById("p" + listItemId).classList.remove('itemcomplete');
                }
                else {
                    console.log(data.msg);
                }
            });
        }
    };
    ListcontainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listcontainer',
            template: __webpack_require__(684),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object])
    ], ListcontainerComponent);
    return ListcontainerComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/listcontainer.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.loginError = false;
        this.loginErrorMessage = "";
        this.registered = route.snapshot.params['message'];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.loginError = true;
                _this.loginErrorMessage = data.msg;
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(685),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/login.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.registerError = false;
        this.registerErrorMessage = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    //Functionality on when the submit button is pressed on the Register page
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        //Check required fields
        if (!this.validateService.validateRegister(user)) {
            this.registerError = true;
            this.registerErrorMessage = 'Please fill in all fields';
            return false;
        }
        //Check email is valid
        if (!this.validateService.validateEmail(user.email)) {
            this.registerError = true;
            this.registerErrorMessage = 'Please enter a valid email';
            return false;
        }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/login/registered']);
            }
            else {
                _this.registerError = true;
                _this.registerErrorMessage = data.msg;
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(686),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/register.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Matt/Library/Mobile Documents/com~apple~CloudDocs/MEAN Sites/List App v2/angular-src/src/environment.js.map

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ".navbar-fixed-bottom p{\n\n  text-align:center;\n\n}\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ".navbar-fixed-top{\n\n  padding:0 1vw;\n\n}\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "#listmenu {\n\n  width:25%;\n\n}\n\n.contentdivs{\n\n  min-height:93vh;\n  padding:0 1vw;\n  overflow:scroll;\n  display: inline-block;\n  float:left;\n\n}\n\n#listcontent {\n\n  width:75%;\n  background-color:#fff;\n  color: #000;\n\n}\n\n#listcontainer{\n\n  width: 100%;\n  margin-top: 3em;\n  max-height:93vh;\n\n}\n\n#listdetails h1{\n\n  text-align:center;\n\n}\n\n.itemcomplete{\n\n  text-decoration:line-through;\n  color: #333;\n\n}\n\n.listItemQuantity{\n\n  margin: 0 1%;\n\n}\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-listcontainer></app-listcontainer>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n\n\t<div class=\"container-fluid navbar-default navbar-fixed-bottom\">\n    \t<p> &copy; 2017 List App<p>\n    </div>\n\n</footer>\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<header>\n\n  <div class=\"navbar navbar-default navbar-fixed-top\">\n   <div class=\"container\">\n     <div class=\"navbar-header\">\n       <a href=\"../\" class=\"navbar-brand\">MEAN List App</a>\n       <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n       </button>\n     </div>\n\n\n       <ul class=\"nav navbar-nav navbar-right\">\n         <li *ngIf=\"authService.loggedIn()\" ><a (click)='onLogoutClick()' href='#'>Logout</a></li>\n       </ul>\n\n    </div>\n  </div>\n\n\n</header>\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<div class='jumbotron text-center'>\n\n  <h1> MEAN List App v2 </h1>\n\n  <p class='lead'>\n\n    Basic list app created from scratch in the MEAN stack\n\n  </p>\n\n  <div>\n\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\"> Register </a>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/login']\"> Login </a>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<div id=\"listcontainer\">\n\n<div id=\"listmenu\" class=\"contentdivs\">\n\n    <div id=\"addnewlist\">\n\n      <h2> Add New List </h2>\n\n      <div *ngIf=\"addlistError\" id=\"error\" class=\"alert-danger\">\n\n        <p>\n          {{addlistErrorMessage}}\n        </p>\n\n      </div>\n\n      <form (submit)=\"onNewListSubmit()\">\n\n        <div class='form-group'>\n\n          <label> List Name </label>\n\n          <input type=\"text\" [(ngModel)]=\"newlistname\" name=\"newlistname\" class='form-control' />\n\n        </div>\n\n        <div class='form-group'>\n\n          <label> Please select a List Type </label>\n\n          <select class=\"form-control select-picker\" [(ngModel)]=\"newlisttype\" name=\"newlisttype\">\n\n              <option value=\"Todo\">Todo</option>\n\n              <option value=\"Shopping\">Shopping</option>\n\n          </select>\n\n        </div>\n\n        <input type='submit' class=\"btn btn-primary\" value='Add New List'/>\n\n      </form>\n\n    </div>\n\n    <div id=\"userslists\">\n\n      <h2> Your Lists </h2>\n\n      <div *ngIf=\"editListTitle\">\n\n        <h3> Edit List Name </h3>\n\n        <div *ngIf=\"editListNameError\" id=\"error\" class=\"alert-danger\">\n\n          <p>\n            {{editListNameErrorMessage}}\n          </p>\n\n        </div>\n\n        <form (submit)=\"saveEditListName(editListNameId)\">\n\n            <input type=\"text\" [(ngModel)]=\"editListName\" name=\"editListName\" class='column col-md-10 well-sm' />\n\n            <input type='submit' class=\"btn btn-primary column col-md-2\" value='Save'/>\n\n        </form>\n\n      </div>\n\n      <div *ngFor=\"let list of lists\" class=\"row\">\n\n      <li class='btn btn-primary column col-md-8' (click)=\"selectList(list._id, list.name, list.listtype)\"  style=\"display:block\">\n\n        {{list.name}}\n\n      </li>\n\n      <li class='btn btn-primary column col-md-2' (click)=\"showEditList(list._id, list.name)\"  style=\"display:block\">\n\n        Edit\n\n      </li>\n\n      <li class='btn btn-primary column col-md-2' (click)=\"deleteList(list._id, list.name)\"  style=\"display:block\">\n\n        Delete\n\n      </li>\n\n      </div>\n\n    </div>\n\n</div>\n\n<div id=\"listcontent\" class=\"contentdivs\">\n\n  <div *ngIf=\"listSelected\" id=\"addlistitem\">\n\n    <h2> Add New List Item </h2>\n\n    <div *ngIf=\"addListItemError\" id=\"error\" class=\"alert-danger\">\n\n      <p>\n        {{addListItemErrorMessage}}\n      </p>\n\n    </div>\n\n    <div *ngIf=\"listType === 'Todo'\" id=\"addlistitemform\">\n\n      <form (submit)=\"onNewListItemSubmitTodo(listId)\">\n\n        <div class=\"row\">\n\n          <label class=\"column col-md-2\"> List Item Description </label>\n\n          <input type=\"text\" [(ngModel)]=\"newListItemName\" name=\"newListItemName\" class='column col-md-7 well-sm' />\n\n          <input type='submit' class=\"btn btn-primary column col-md-2 col-md-offset-1\" value='Add New List Item'/>\n\n        </div>\n\n      </form>\n\n    </div>\n\n    <div *ngIf=\"listType === 'Shopping'\" id=\"addlistitemform\">\n\n      <form (submit)=\"onNewListItemSubmitShopping(listId)\">\n\n        <div class=\"row\">\n\n          <label class=\"column col-md-2\"> List Item Description: </label>\n\n          <input type=\"text\" [(ngModel)]=\"newListItemName\" name=\"newListItemName\" class='column col-md-4 well-sm' />\n\n          <label class=\"column col-md-1\"> Quantity: </label>\n\n          <input type=\"number\" [(ngModel)]=\"newListItemQty\" name =\"newListItemQty\" class=\"column col-md-2 well-sm\" />\n\n          <input type='submit' class=\"btn btn-primary column col-md-1 col-md-offset-1\" value='Add List Item'/>\n\n        </div>\n\n      </form>\n\n    </div>\n\n  </div>\n\n  <div id=\"listdetails\">\n\n    <h1> {{listname}} </h1>\n\n    <div *ngIf=\"listItemsEmpty\">\n\n      {{listItemsEmpty}}\n\n    </div>\n\n    <div *ngIf=\"listSelected === false\">\n\n      <p>\n         Please select a list from your lists on the left hand side.\n      </p>\n\n    </div>\n\n    <div *ngIf=\"editList\">\n\n      <div *ngIf=\"editListItemError\" id=\"error\" class=\"alert-danger\">\n\n        <p>\n          {{editListItemErrorMessage}}\n        </p>\n\n      </div>\n\n      <form (submit)=\"editListItem(editListId)\">\n\n        <div class=\"row\">\n\n          <label class=\"column col-md-2\"> List Item Description </label>\n\n          <input type=\"text\" [(ngModel)]=\"editListItemName\" name=\"editListItemName\" class='column col-md-7 well-sm' />\n\n          <input type='submit' class=\"btn btn-primary column col-md-2 col-md-offset-1\" value='Edit List Item'/>\n\n        </div>\n\n      </form>\n\n    </div>\n\n    <div *ngIf=\"listItems && listType === 'Shopping'\">\n\n      <div *ngFor=\"let listItem of listItems\">\n\n        <div class=\"shoppinglistitem row\">\n\n          <div class=\"shoppinglistitemname column col-md-6\">\n\n            <p>\n\n              {{listItem.name}}\n\n            </p>\n\n          </div>\n\n          <div class=\"shoppinglistitemquantity column col-md-4\">\n\n              <button class=\"btn btn-primary\" *ngIf=\"listItem.quantity == 1\" disabled> - </button>\n\n              <button class=\"btn btn-primary\" *ngIf=\"listItem.quantity > 1\" (click)=\"lowerItemQuantity(listItem._id, listItem.quantity)\"> - </button>\n\n                <span class=\"listItemQuantity\"> {{listItem.quantity}} </span>\n\n              <button class=\"btn btn-primary\" (click)=\"raiseItemQuantity(listItem._id, listItem.quantity)\"> + </button>\n\n          </div>\n\n          <div class=\"column col-md-1\">\n\n            <p>\n\n              <button class=\"btn btn-primary\" (click)=\"showEditListItem(listItem._id, listItem.name, listItem.quantity)\"> Edit </button>\n\n            </p>\n\n          </div>\n\n          <div class=\"column col-md-1\">\n\n            <p>\n\n              <button class=\"btn btn-primary\" (click)=\"deleteListItem(listItem._id, listItem.name)\"> Delete </button>\n\n            </p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div *ngIf=\"listItems && listType === 'Todo'\">\n\n      <div *ngFor=\"let listItem of listItems\">\n\n        <div *ngIf=\"editListTodo\">\n\n          <div *ngIf=\"editListItemError\" id=\"error\" class=\"alert-danger\">\n\n            <p>\n              {{editListItemErrorMessage}}\n            </p>\n\n          </div>\n\n          <form (submit)=\"editListItemTodo(editListId)\">\n\n            <div class=\"row\">\n\n              <label class=\"column col-md-2\"> List Item Description </label>\n\n              <input type=\"text\" [(ngModel)]=\"editListItemName\" name=\"editListItemName\" class='column col-md-7 well-sm' />\n\n              <input type='submit' class=\"btn btn-primary column col-md-2 col-md-offset-1\" value='Edit List Item'/>\n\n            </div>\n\n          </form>\n\n        </div>\n\n        <div *ngIf=\"listItem.complete == true\" class=\"todolistitem row\">\n\n          <div class=\"todolistitemname column col-md-8\">\n\n            <p id=\"p{{listItem._id}}\" class=\"itemcomplete\">\n\n              {{listItem.name}}\n\n            </p>\n\n          </div>\n\n          <div class=\"column col-md-2\">\n\n            <span> Completed: </span><input type=\"checkbox\" id=\"todoStatus{{listItem._id}}\" (click)=\"todoListStatus(listItem._id, listItem.name)\" checked/>\n\n          </div>\n\n          <div class=\"column col-md-1\">\n\n            <p>\n\n              <button class=\"btn btn-primary\" (click)=\"showEditListItem(listItem._id, listItem.name, listItem.quantity)\"> Edit </button>\n\n            </p>\n\n          </div>\n\n          <div class=\"column col-md-1\">\n\n            <p>\n\n              <button class=\"btn btn-primary\" (click)=\"deleteListItem(listItem._id, listItem.name)\"> Delete </button>\n\n            </p>\n\n          </div>\n\n        </div>\n\n        <div *ngIf=\"listItem.complete != true\" class=\"todolistitem row\">\n\n          <div class=\"todolistitemname column col-md-8\">\n\n            <p id=\"p{{listItem._id}}\">\n\n              {{listItem.name}}\n\n            </p>\n\n          </div>\n\n          <div class=\"column col-md-2\">\n\n            <span> Completed: </span><input type=\"checkbox\" id=\"todoStatus{{listItem._id}}\" (click)=\"todoListStatus(listItem._id, listItem.name)\"/>\n\n          </div>\n\n          <div class=\"column col-md-1\">\n\n            <p>\n\n              <button class=\"btn btn-primary\" (click)=\"showEditListItem(listItem._id, listItem.name, listItem.complete)\"> Edit </button>\n\n            </p>\n\n          </div>\n\n          <div class=\"column col-md-1\">\n\n            <p>\n\n              <button class=\"btn btn-primary\" (click)=\"deleteListItem(listItem._id, listItem.name)\"> Delete </button>\n\n            </p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'> Login </h2>\n\n<div *ngIf=\"registered\" id=\"registered\" class=\"alert-success\">\n\n  <p>\n    You have successfully registered, you can now log in.\n  </p>\n\n</div>\n\n<div *ngIf=\"loginError\" id=\"error\" class=\"alert-danger\">\n\n  <p>\n    {{loginErrorMessage}}\n  </p>\n\n</div>\n\n<form (submit)='onLoginSubmit()'>\n\n  <div class='form-group'>\n\n    <label> Username </label>\n\n    <input type='text' [(ngModel)]=\"username\" name=\"username\" class='form-control' />\n\n  </div>\n\n  <div class='form-group'>\n\n    <label> Password </label>\n\n    <input type='password' [(ngModel)]=\"password\" name=\"password\" class='form-control' />\n\n  </div>\n\n  <input type='submit' class='btn btn-primary' value='Login'/>\n\n</form>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'> Register </h2>\n\n<div *ngIf=\"registerError\" id=\"error\" class=\"alert-danger\">\n\n  <p>\n    {{registerErrorMessage}}\n  </p>\n\n</div>\n\n<form (submit)=\"onRegisterSubmit()\">\n\n  <div class='form-group'>\n\n    <label> Name </label>\n\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class='form-control' />\n\n  </div>\n\n  <div class='form-group'>\n\n    <label> Username </label>\n\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class='form-control' />\n\n  </div>\n\n  <div class='form-group'>\n\n    <label> Email </label>\n\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class='form-control' />\n\n  </div>\n\n\n  <div class='form-group'>\n\n    <label> Password </label>\n\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class='form-control' />\n\n  </div>\n\n  <input type='submit' class=\"btn btn-primary\" value='Submit'/>\n\n</form>\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[709]);
//# sourceMappingURL=main.bundle.map