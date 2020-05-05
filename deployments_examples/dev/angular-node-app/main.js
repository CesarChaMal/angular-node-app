(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <app-header [MyTitle]=\"'Clientes'\"></app-header>\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n    <div [class.isPrinting]=\"printService.isPrinting\">\r\n      <router-outlet name=\"printArea\"></router-outlet>\r\n    </div>\r\n  </main>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n  <form (submit)=\"onLogin(loginform)\" #loginform=\"ngForm\" *ngIf=\"!isLoading\">\r\n    <mat-form-field>\r\n      <input matInput type=\"email\" ngModel name=\"email\" placeholder=\"Correo electronico\" #emailInput=\"ngModel\" required email>\r\n      <mat-error *ngIf=\"emailInput.invalid\">Por favor teclee un correo valido.</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"password\" ngModel name=\"password\" placeholder=\"Contraseña\" #passwordInput=\"ngModel\" required>\r\n      <mat-error *ngIf=\"passwordInput.invalid\">Por favor teclee una contraseña valida.</mat-error>\r\n    </mat-form-field>\r\n    <button mat-raised-button color='accent' type=\"submit\">Iniciar sesión</button>\r\n  </form>\r\n</mat-card>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n  <form (submit)=\"onSignup(signupform)\" #signupform=\"ngForm\" *ngIf=\"!isLoading\">\r\n    <mat-form-field>\r\n      <input matInput type=\"email\" ngModel name=\"email\" placeholder=\"Correo electronico\" #emailInput=\"ngModel\" required email>\r\n      <mat-error *ngIf=\"emailInput.invalid\">Por favor teclee un correo valido.</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"password\" ngModel name=\"password\" placeholder=\"Contraseña\" #passwordInput=\"ngModel\" required>\r\n      <mat-error *ngIf=\"passwordInput.invalid\">Por favor teclee una contraseña valida.</mat-error>\r\n    </mat-form-field>\r\n    <button mat-raised-button color='accent' type=\"submit\">Registrar</button>\r\n  </form>\r\n</mat-card>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client-create/client-create.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client-create/client-create.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n  <form [formGroup]=\"form\" (submit)=\"onSaveClient()\" *ngIf=\"!isLoading\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Cliente</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"client\" placeholder=\"Nombre del cliente\">\r\n      <mat-error *ngIf=\"form.get('client').invalid\">Por favor teclee el nombre del cliente.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Producto</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"product\" placeholder=\"Nombre del producto\">\r\n      <mat-error *ngIf=\"form.get('product').invalid\">Por favor teclee el nombre del producto.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Direccion</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"address\" placeholder=\"Direccion\">\r\n      <mat-error *ngIf=\"form.get('address').invalid\">Por favor teclee la direccion del cliente.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Telefono</mat-label>\r\n      <mat-icon matSuffix>phone</mat-icon>\r\n      <mat-hint>Incluye el codigo del area</mat-hint>\r\n      <input matInput type=\"text\" formControlName=\"phone\" placeholder=\"11-11111111\">\r\n      <mat-error *ngIf=\"form.get('phone').invalid\">Por favor el telefono del cliente.</mat-error>\r\n    </mat-form-field>\r\n<!--\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"extras\" placeholder=\"Extras del cliente\">\r\n      <mat-error *ngIf=\"form.get('extras').invalid\">Por favor escoge una opcion extra.</mat-error>\r\n    </mat-form-field>\r\n  -->\r\n    <div class=\"extras fill\">\r\n      <mat-label class=\"extras-label\" placeholder=\"Extras del cliente\">Extras: </mat-label>\r\n      <div class=\"checkbox\" formArrayName=\"extras\" *ngFor=\"let extra of form.controls.extras.controls; let i = index\">\r\n        <mat-checkbox (change)=\"totalSelected()\" [formControlName]=\"i\">{{extrasData[i].description}}</mat-checkbox>\r\n      </div>\r\n      <mat-error *ngIf=\"totalExtrasSelected<minimumExtrasSelected\">Al menos debes seleccionar un extra</mat-error>\r\n    </div>\r\n    <br/>\r\n    <button mat-raised-button color='accent' type=\"submit\">Guardar</button>\r\n    <button mat-raised-button color='accent' type=\"reset\" (click)=\"reset()\">Limpiar</button>\r\n    <button mat-raised-button color='accent' type=\"button\" *ngIf=\"mode!='create'\" (click)=\"printOrder()\">Imprimir</button>\r\n  </form>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client-list/client-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client-list/client-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-accordion multi=\"true\" *ngIf=\"(clients.length > 0) && !isLoading\">\r\n  <mat-expansion-panel *ngFor=\"let client of clients\">\r\n    <mat-expansion-panel-header>{{ client.client }}</mat-expansion-panel-header>\r\n    <p>{{ client.address }}</p>\r\n    <mat-action-row>\r\n      <a mat-button color=\"primary\" [routerLink]=\"['/edit', client.id]\">EDITAR</a>\r\n      <button mat-button color=\"warn\" (click)=\"onDelete(client.id)\">BORRAR</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<mat-paginator [length]=\"totalClients\" [pageSize]=\"clientsPerPage\" [pageSizeOptions]='pageSizeOptions' (page)=\"onChangePage($event)\" *ngIf=\"(clients.length > 0)\"></mat-paginator>\r\n<p class=\"info-text mat-body-1\" *ngIf=\"(clients.length <= 0) && !isLoading\">No clientes agregados todavia!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client-show/client-show.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client-show/client-show.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <form [formGroup]=\"form\">\r\n    <mat-form-field>\r\n      <mat-label>Cliente</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"client\" placeholder=\"Nombre del cliente\">\r\n      <mat-error *ngIf=\"form.get('client').invalid\">Por favor teclee el nombre del cliente.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-label>Producto</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"product\" placeholder=\"Nombre del producto\">\r\n      <mat-error *ngIf=\"form.get('product').invalid\">Por favor teclee el nombre del producto.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-label>Direccion</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"address\" placeholder=\"Direccion\">\r\n      <mat-error *ngIf=\"form.get('address').invalid\">Por favor teclee la direccion del cliente.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-label>Telefono</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"phone\" placeholder=\"11-11111111\">\r\n      <mat-error *ngIf=\"form.get('phone').invalid\">Por favor el telefono del cliente.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <div class=\"extras fill\">\r\n      <mat-label style=\"font-size: .9em; color: rgba(0,0,0,54);\" placeholder=\"Extras del cliente\">Extras: </mat-label>\r\n      <div class=\"checkbox\" *ngFor=\"let extra of extrasData; let i = index\">\r\n        <span *ngIf=\"this.client.extras[i]\">{{extra.description}}</span>\r\n      </div>\r\n    </div>\r\n    <br/>\r\n  </form>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\r\n  <!-- <span>{{ MyTitle }}</span> -->\r\n  <span>\r\n    <a routerLink=\"/\">{{ MyTitle }}</a>\r\n  </span>\r\n  <span class=\"spacer\"></span>\r\n  <ul>\r\n    <li>\r\n      <a mat-button routerLink=\"/create\" *ngIf=\"isLoggedIn()\" routerLinkActive=\"mat-accent\">Nuevo Cliente</a>\r\n    </li>\r\n    <li>\r\n      <a mat-button routerLink=\"/login\" *ngIf=\"!isLoggedIn()\" routerLinkActive=\"mat-accent\">Iniciar sesión</a>\r\n    </li>\r\n    <li>\r\n      <a mat-button routerLink=\"/signup\" *ngIf=\"!isLoggedIn()\" routerLinkActive=\"mat-accent\">Registrese</a>\r\n    </li>\r\n    <li>\r\n      <a mat-button routerLink=\"/logout\" *ngIf=\"isLoggedIn()\" routerLinkActive=\"mat-accent\">Cerrar sesión</a>\r\n    </li>\r\n  </ul>\r\n</mat-toolbar>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/print/print-layout/print-layout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/print/print-layout/print-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table>\r\n  <thead><tr><td>\r\n    <div class=\"header-space\"></div>\r\n  </td></tr></thead>\r\n  <tbody><tr><td>\r\n    <div class=\"content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </td></tr></tbody>\r\n  <tfoot><tr><td>\r\n    <div class=\"footer-space\"></div>\r\n  </td></tr></tfoot>\r\n</table>\r\n\r\n<!--<div class=\"header\">COOL HEADER</div>-->\r\n<!--<div class=\"footer\">AWESOME FOOTER</div>-->\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var client_list_component_1 = __webpack_require__(/*! ./client/client-list/client-list.component */ "./src/app/client/client-list/client-list.component.ts");
var client_create_component_1 = __webpack_require__(/*! ./client/client-create/client-create.component */ "./src/app/client/client-create/client-create.component.ts");
var login_component_1 = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
var logout_component_1 = __webpack_require__(/*! ./auth/logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
var signup_component_1 = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
var auth_guard_1 = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var print_layout_component_1 = __webpack_require__(/*! ./print/print-layout/print-layout.component */ "./src/app/print/print-layout/print-layout.component.ts");
var client_show_component_1 = __webpack_require__(/*! ./client/client-show/client-show.component */ "./src/app/client/client-show/client-show.component.ts");
var routes = [
    // { path: '', component: ClientListComponent},
    { path: '', component: client_list_component_1.ClientListComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'create', component: client_create_component_1.ClientCreateComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'edit/:clientId', component: client_create_component_1.ClientCreateComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    // { path: 'show', component: ClientCreateComponent },
    // { path: 'show/:clientId', component: ClientCreateComponent },
    // { path: 'print', component: PrintLayoutComponent},
    // tslint:disable-next-line:max-line-length
    // { path: 'print', outlet: 'printArea', component: PrintLayoutComponent, children: [{ path: 'show/:clientId', component: ClientCreateComponent }]},
    // tslint:disable-next-line:max-line-length
    { path: 'print', outlet: 'printArea', component: print_layout_component_1.PrintLayoutComponent, children: [{ path: 'show/:clientId', component: client_show_component_1.ClientShowComponent }] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\r\n  margin-top: 1rem;\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var print_service_1 = __webpack_require__(/*! ./print/print.service */ "./src/app/print/print.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(printService) {
        this.printService = printService;
        this.title = 'angular-node-app';
        console.log('AppComponent');
    }
    AppComponent.ctorParameters = function () { return [
        { type: print_service_1.PrintService }
    ]; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [print_service_1.PrintService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var forms_2 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var header_component_1 = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var client_create_component_1 = __webpack_require__(/*! ./client/client-create/client-create.component */ "./src/app/client/client-create/client-create.component.ts");
var client_show_component_1 = __webpack_require__(/*! ./client/client-show/client-show.component */ "./src/app/client/client-show/client-show.component.ts");
var client_list_component_1 = __webpack_require__(/*! ./client/client-list/client-list.component */ "./src/app/client/client-list/client-list.component.ts");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var login_component_1 = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
var logout_component_1 = __webpack_require__(/*! ./auth/logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
var signup_component_1 = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
var print_layout_component_1 = __webpack_require__(/*! ./print/print-layout/print-layout.component */ "./src/app/print/print-layout/print-layout.component.ts");
var print_service_1 = __webpack_require__(/*! ./print/print.service */ "./src/app/print/print.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                client_create_component_1.ClientCreateComponent,
                client_show_component_1.ClientShowComponent,
                client_list_component_1.ClientListComponent,
                login_component_1.LoginComponent,
                logout_component_1.LogoutComponent,
                signup_component_1.SignupComponent,
                print_layout_component_1.PrintLayoutComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatInputModule,
                material_1.MatCardModule,
                material_1.MatButtonModule,
                material_1.MatToolbarModule,
                material_1.MatExpansionModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatPaginatorModule,
                material_1.MatCheckboxModule,
                material_1.MatIconModule,
                http_1.HttpClientModule
            ],
            providers: [print_service_1.PrintService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authService.isLoggedIn();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: auth_service_1.AuthService }
    ]; };
    AuthGuard = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.uri = 'http://localhost:3000/api/user/';
    }
    AuthService.prototype.createUser = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http.post(this.uri + 'signup', authData)
            .subscribe(function (response) {
            console.log(response);
            localStorage.setItem('ACCESS_TOKEN', 'access_token');
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http.post(this.uri + 'login', authData)
            .subscribe(function (response) {
            console.log(response);
            localStorage.setItem('ACCESS_TOKEN', 'access_token');
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('ACCESS_TOKEN');
        this.router.navigate(['/']);
    };
    AuthService.ctorParameters = function () { return [
        { type: http_1.HttpClient },
        { type: router_1.Router }
    ]; };
    AuthService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field,\r\ninput {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner  {\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyICB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    LoginComponent.prototype.onLogin = function (form) {
        console.log(form.value);
        if (form.invalid) {
            return;
        }
        this.authService.login(form.value.email, form.value.password);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: auth_service_1.AuthService }
    ]; };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        console.log('LogoutComponent');
        this.authService.logout();
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: auth_service_1.AuthService }
    ]; };
    LogoutComponent = __decorate([
        core_1.Component({
            template: ''
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;


/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field,\r\ninput {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner  {\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCxcclxuaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciAge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    SignupComponent.prototype.onSignup = function (form) {
        console.log(form.value);
        if (form.invalid) {
            return;
        }
        this.authService.createUser(form.value.email, form.value.password);
    };
    SignupComponent.ctorParameters = function () { return [
        { type: auth_service_1.AuthService }
    ]; };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ "./src/app/client/client-create/client-create.component.css":
/*!******************************************************************!*\
  !*** ./src/app/client/client-create/client-create.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field, textarea {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner  {\r\n  margin: auto;\r\n}\r\n\r\n.checkbox {\r\n  margin: 0 10px;\r\n}\r\n\r\nbutton {\r\n  margin: 0 10px;\r\n}\r\n\r\n.extras {\r\n  align-items: baseline;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  font-size: inherit;\r\n  font-weight: 400;\r\n  line-height: 1.125;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  position: relative;\r\n  text-align: left;\r\n  /*display: inline-block;*/\r\n}\r\n\r\n.extras, .fill {\r\n  background-color: rgba(0,0,0,.04);\r\n}\r\n\r\n.extras .extras-label {\r\n  padding: 12px 12px 0px;\r\n  font-size: .9em;\r\n  color: rgba(0,0,0,62);\r\n  line-height: 1.125;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1jcmVhdGUvY2xpZW50LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0Msa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsK0NBQStDO0FBQ2pEIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50L2NsaWVudC1jcmVhdGUvY2xpZW50LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQsIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIgIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5leHRyYXMge1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTtcclxuICBmb250LWZhbWlseTogUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8qZGlzcGxheTogaW5saW5lLWJsb2NrOyovXHJcbn1cclxuXHJcbi5leHRyYXMsIC5maWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNCk7XHJcbn1cclxuLmV4dHJhcyAuZXh0cmFzLWxhYmVsIHtcclxuICBwYWRkaW5nOiAxMnB4IDEycHggMHB4O1xyXG4gIGZvbnQtc2l6ZTogLjllbTtcclxuICBjb2xvcjogcmdiYSgwLDAsMCw2Mik7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTI1O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/client/client-create/client-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/client/client-create/client-create.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var client_service_1 = __webpack_require__(/*! ../client.service */ "./src/app/client/client.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var print_service_1 = __webpack_require__(/*! src/app/print/print.service */ "./src/app/print/print.service.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ClientCreateComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function ClientCreateComponent(clientService, route, formBuilder, printService, location, router) {
        this.clientService = clientService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.printService = printService;
        this.location = location;
        this.router = router;
        this.isLoading = false;
        this.extrasData = [];
        this.minimumExtrasSelected = 1;
        this.totalExtrasSelected = 0;
        this._mode = 'create';
        console.log('ClientCreateComponent');
        /*
            router.events.pipe(
              filter(event => event instanceof NavigationEnd)
            ).subscribe(() => {
              if (location.path() != '') {
                // console.log('path: ' + location.path());
                // console.log(location.path().substr(location.path().indexOf('/') + 1, location.path().lastIndexOf('/')));
                // console.log(location.path().substring(location.path().indexOf('/') + 1, location.path().lastIndexOf('/')));
                // console.log(location.path().split('/'));
                // console.log(location.path().split('/')[location.path().split('/').length - 2]);
                // console.log(location.path().split('/')[location.path().split('/').length - 1]);
        
                if (location.path().split('/').length > 1) {
                  this.path = location.path().split('/')[location.path().split('/').length - 2];
                } else {
                  this.path = location.path().split('/')[location.path().split('/').length - 1];
                }
                if (this.path === 'show') {
                  this.printService.onDataReady();
                }
              }
            });
        */
        /*
            router.events.subscribe((event) => {
              console.log('event: ' + event);
              // tslint:disable-next-line:triple-equals
              if (location.path() != '') {
                // console.log('path: ' + location.path());
                // console.log(location.path().substr(location.path().indexOf('/') + 1, location.path().lastIndexOf('/')));
                // console.log(location.path().substring(location.path().indexOf('/') + 1, location.path().lastIndexOf('/')));
                // console.log(location.path().split('/'));
                // console.log(location.path().split('/')[location.path().split('/').length - 2]);
                // console.log(location.path().split('/')[location.path().split('/').length - 1]);
        
                if (location.path().split('/').length > 1) {
                  this.path = location.path().split('/')[location.path().split('/').length - 2];
                } else {
                  this.path = location.path().split('/')[location.path().split('/').length - 1];
                }
                if (this.path === 'show') {
                  this.printService.onDataReady();
                }
              }
            });
        */
    }
    ClientCreateComponent_1 = ClientCreateComponent;
    ClientCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ClientCreateComponent ngOnInit');
        // this.form = new FormGroup({
        //   'client': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
        //   'product': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
        //   'address': new FormControl(null, {validators: [Validators.required]}),
        // tslint:disable-next-line: max-line-length
        // 'phone': new FormControl(null, {validators: [Validators.required, Validators.minLength(11), Validators.pattern('[0-9]{2}-[0-9]{8}')]}),
        //    'extras': new FormArray([], minSelectedCheckboxes(this.minimumExtrasSelected))
        // });
        this.form = this.formBuilder.group({
            'client': new forms_1.FormControl(null, { validators: [forms_1.Validators.required, forms_1.Validators.minLength(3)] }),
            'product': new forms_1.FormControl(null, { validators: [forms_1.Validators.required, forms_1.Validators.minLength(3)] }),
            'address': new forms_1.FormControl(null, { validators: [forms_1.Validators.required] }),
            // tslint:disable-next-line: max-line-length
            'phone': new forms_1.FormControl(null, { validators: [forms_1.Validators.required, forms_1.Validators.minLength(11), forms_1.Validators.pattern('[0-9]{2}-[0-9]{8}')] }),
            'extras': new forms_1.FormArray([], minSelectedCheckboxes(this.minimumExtrasSelected))
        });
        rxjs_1.of(ClientCreateComponent_1.getExtras()).subscribe(function (extras) {
            _this.extrasData = extras;
            _this.addCheckboxes();
        });
        console.log('Minim extras selected: ' + this.minimumExtrasSelected);
        console.log('Total extras selected: ' + this.totalExtrasSelected);
        this.route.paramMap.subscribe(function (paramMap) {
            console.log('paramMap: ' + paramMap);
            // Object.keys(paramMap).forEach(e => console.log(`key=${e}  value=${paramMap[e]}`));
            Object.keys(paramMap['params']).forEach(function (e) { return console.log("key=" + e + "  value=" + paramMap['params'][e]); });
            // Object.keys(paramMap['params']).forEach((value1, key1) => {
            //   console.log(key1 + ': ' + value1);
            //   Object.keys(value1).forEach((value2, key2) => {
            //     console.log(key2 + ': ' + value2);
            //   });
            // });
            console.log('paramMap has clientId: ' + paramMap.has('clientId'));
            if (paramMap.has('clientId')) {
                // tslint:disable-next-line:triple-equals
                /*
                        if (this.path == 'edit') {
                          this._mode = 'edit';
                        } else {
                          this._mode = 'show';
                        }
                */
                _this._mode = 'edit';
                _this.clientId = paramMap.get('clientId');
                _this.isLoading = true;
                _this.clientService.getClient(_this.clientId).subscribe(function (clientData) {
                    _this.isLoading = false;
                    // tslint:disable-next-line: max-line-length
                    // this.client = {id: clientData._id, client: clientData.client, product: clientData.product, address: clientData.address, phone: clientData.phone, extras: clientData.extras};
                    // tslint:disable-next-line: max-line-length
                    _this.client = { id: clientData.id, client: clientData.client, product: clientData.product, address: clientData.address, phone: clientData.phone, extras: clientData.extras };
                    console.log(clientData);
                    console.log('clientData.id: ' + clientData.id);
                    // console.log('clientData._id: ' + clientData._id);
                    console.log('clientData.client: ' + clientData.client);
                    console.log(_this.client);
                    // tslint:disable-next-line: max-line-length
                    _this.form.setValue({ client: _this.client.client, product: _this.client.product, address: _this.client.address, phone: _this.client.phone, extras: _this.client.extras });
                    // tslint:disable-next-line:triple-equals
                    _this.totalSelected();
                });
            }
            else {
                _this._mode = 'create';
                _this.clientId = null;
            }
        });
    };
    // tslint:disable-next-line:member-ordering
    ClientCreateComponent.getExtras = function () {
        return [
            { id: 1, name: 'pocchuc', description: 'Poc chuc', selected: false },
            { id: 2, name: 'aguacate', description: 'Aguacate', selected: false },
            { id: 3, name: 'cebolla', description: 'Cebolla', selected: false },
            { id: 4, name: 'papa', description: 'Papa', selected: false }
        ];
    };
    Object.defineProperty(ClientCreateComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    ClientCreateComponent.prototype.addCheckboxes = function () {
        var _this = this;
        this.extrasData.forEach(function (o, i) {
            // const control = new FormControl(i === 0); // if first item set to true, else false, first selected
            var control = new forms_1.FormControl(i === -1); // if first item set to true, else false, no selected
            // const control = new FormControl(o.id);
            // const control = new FormControl(o.name);
            _this.form.controls.extras.push(control);
        });
        console.log(this.form.controls.extras);
        console.log(this.form.controls.extras.get('0'));
    };
    ClientCreateComponent.prototype.onSaveClient = function () {
        var _this = this;
        console.log('onSaveClient');
        if (this.form.invalid) {
            return;
        }
        var selectedExtrasIds = this.form.value.extras
            .map(function (v, i) { return (v ? _this.extrasData[i].id : null); })
            .filter(function (v) { return v !== null; });
        console.log(selectedExtrasIds);
        this.isLoading = true;
        console.log('onSaveClient mode: ' + this._mode);
        console.log('form: ');
        // Object.keys(this.form).forEach(e => console.log(`key=${e}  value=${this.form[e]}`));
        Object.keys(this.form.value).forEach(function (e) { return console.log("key=" + e + "  value=" + _this.form.value[e]); });
        if (this._mode === 'create') {
            // tslint:disable-next-line: max-line-length
            this.clientService.addClient(this.form.value.client, this.form.value.product, this.form.value.address, this.form.value.phone, this.form.value.extras);
        }
        else if (this._mode === 'edit') {
            // tslint:disable-next-line: max-line-length
            this.clientService.updateClient(this.clientId, this.form.value.client, this.form.value.product, this.form.value.address, this.form.value.phone, this.form.value.extras);
        }
        // this.form.reset
        this.form.reset();
    };
    ClientCreateComponent.prototype.totalSelected = function () {
        // console.log(this.totalExtrasSelected);
        // console.log(this.form.value.extras);
        // console.log(this.form.controls.extras);
        this.totalExtrasSelected = totalSelected(this.form.controls.extras);
        return this.totalExtrasSelected;
    };
    ClientCreateComponent.prototype.reset = function () {
        this.form.reset();
    };
    ClientCreateComponent.prototype.printOrder = function () {
        // const clientArray = JSON.stringify(this.client);
        // this.printService.printDocument('show', this.clientId);
        this.printService.printDocument('show', this.clientId);
        // this.printService.printDocument('print', this.clientId);
        // this.printService.onDataReady();
    };
    var ClientCreateComponent_1;
    ClientCreateComponent.ctorParameters = function () { return [
        { type: client_service_1.ClientService },
        { type: router_1.ActivatedRoute },
        { type: forms_1.FormBuilder },
        { type: print_service_1.PrintService },
        { type: common_1.Location },
        { type: router_1.Router }
    ]; };
    ClientCreateComponent = ClientCreateComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-client-create',
            template: __importDefault(__webpack_require__(/*! raw-loader!./client-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client-create/client-create.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./client-create.component.css */ "./src/app/client/client-create/client-create.component.css")).default]
        }),
        __metadata("design:paramtypes", [client_service_1.ClientService, router_1.ActivatedRoute, forms_1.FormBuilder, print_service_1.PrintService, common_1.Location, router_1.Router])
    ], ClientCreateComponent);
    return ClientCreateComponent;
}());
exports.ClientCreateComponent = ClientCreateComponent;
function minSelectedCheckboxes(min) {
    if (min === void 0) { min = 1; }
    var validator = function (formArray) {
        // const totalSelected = formArray.controls
        //   .map(control => control.value)
        //   .reduce((prev, next) => next ? prev + next : prev, 0);
        return totalSelected(formArray) >= min ? null : { required: true };
    };
    return validator;
}
function totalSelected(formArray) {
    return formArray.controls
        .map(function (control) { return control.value; })
        .reduce(function (prev, next) { return next ? prev + next : prev; }, 0);
}
//


/***/ }),

/***/ "./src/app/client/client-list/client-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/client/client-list/client-list.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n  display: block;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.info-text {\r\n  text-align: center;\r\n}\r\n\r\nmat-spinner  {\r\n  margin: auto;\r\n}\r\n\r\nmat-paginator {\r\n  margin-top: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1saXN0L2NsaWVudC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50L2NsaWVudC1saXN0L2NsaWVudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmluZm8tdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciAge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/client/client-list/client-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/client/client-list/client-list.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var client_service_1 = __webpack_require__(/*! ../client.service */ "./src/app/client/client.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var myPaginatorEs_1 = __webpack_require__(/*! ./myPaginatorEs */ "./src/app/client/client-list/myPaginatorEs.ts");
var ClientListComponent = /** @class */ (function () {
    function ClientListComponent(clientService) {
        this.clientService = clientService;
        this.clients = [];
        this.isLoading = false;
        this.totalClients = 0;
        this.clientsPerPage = 10;
        this.currentPage = 1;
        this.pageSizeOptions = [1, 2, 5, 10];
    }
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.clientService.getClients(this.clientsPerPage, this.currentPage);
        this.clientSub = this.clientService.getClientUpdateListener()
            .subscribe(function (clientData) {
            _this.isLoading = false;
            _this.clients = clientData.clients;
            _this.totalClients = clientData.clientCount;
        });
    };
    ClientListComponent.prototype.onDelete = function (clientId) {
        var _this = this;
        this.isLoading = true;
        this.clientService.deleteClient(clientId).subscribe(function () {
            _this.clientService.getClients(_this.clientsPerPage, _this.currentPage);
        });
    };
    ClientListComponent.prototype.onChangePage = function (pageData) {
        console.log(pageData);
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.clientsPerPage = pageData.pageSize;
        this.clientService.getClients(this.clientsPerPage, this.currentPage);
    };
    ClientListComponent.prototype.ngOnDestroy = function () {
        this.clientSub.unsubscribe();
    };
    ClientListComponent.ctorParameters = function () { return [
        { type: client_service_1.ClientService }
    ]; };
    ClientListComponent = __decorate([
        core_1.Component({
            selector: 'app-client-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./client-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client-list/client-list.component.html")).default,
            providers: [{ provide: material_1.MatPaginatorIntl, useClass: myPaginatorEs_1.MatPaginatorIntlEs }]
            // providers: [{provide: MatPaginatorIntl, useClass: MatPaginatorIntlPo}]
            ,
            styles: [__importDefault(__webpack_require__(/*! ./client-list.component.css */ "./src/app/client/client-list/client-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [client_service_1.ClientService])
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;


/***/ }),

/***/ "./src/app/client/client-list/myPaginatorEs.ts":
/*!*****************************************************!*\
  !*** ./src/app/client/client-list/myPaginatorEs.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var MatPaginatorIntlEs = /** @class */ (function (_super) {
    __extends(MatPaginatorIntlEs, _super);
    function MatPaginatorIntlEs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemsPerPageLabel = 'Resultados por página';
        _this.nextPageLabel = 'Página siguiente';
        _this.previousPageLabel = 'Página anterior';
        _this.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return '0 de ' + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            var endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
        };
        return _this;
    }
    MatPaginatorIntlEs = __decorate([
        core_1.Injectable()
    ], MatPaginatorIntlEs);
    return MatPaginatorIntlEs;
}(material_1.MatPaginatorIntl));
exports.MatPaginatorIntlEs = MatPaginatorIntlEs;


/***/ }),

/***/ "./src/app/client/client-show/client-show.component.css":
/*!**************************************************************!*\
  !*** ./src/app/client/client-show/client-show.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field, textarea {\r\n  width: 100%;\r\n}\r\n\r\n.extras {\r\n  align-items: baseline;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  font-size: inherit;\r\n  font-weight: 400;\r\n  line-height: 1.125;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  position: relative;\r\n  text-align: left;\r\n  /*display: inline-block;*/\r\n}\r\n\r\n.extras, .fill {\r\n  background-color: rgba(0,0,0,.04);\r\n}\r\n\r\nextras .extras-label {\r\n  padding: 12px 12px 0px;\r\n  font-size: .9em;\r\n  color: rgba(0,0,0,54);\r\n  line-height: 1.125;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1zaG93L2NsaWVudC1zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0Msa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsK0NBQStDO0FBQ2pEIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50L2NsaWVudC1zaG93L2NsaWVudC1zaG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCwgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXh0cmFzIHtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS4xMjU7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAvKmRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xyXG59XHJcblxyXG4uZXh0cmFzLCAuZmlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDQpO1xyXG59XHJcblxyXG5leHRyYXMgLmV4dHJhcy1sYWJlbCB7XHJcbiAgcGFkZGluZzogMTJweCAxMnB4IDBweDtcclxuICBmb250LXNpemU6IC45ZW07XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsNTQpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTtcclxuICBmb250LWZhbWlseTogUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/client/client-show/client-show.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/client/client-show/client-show.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var client_service_1 = __webpack_require__(/*! ../client.service */ "./src/app/client/client.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var print_service_1 = __webpack_require__(/*! src/app/print/print.service */ "./src/app/print/print.service.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ClientShowComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function ClientShowComponent(clientService, route, formBuilder, printService, location, router) {
        this.clientService = clientService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.printService = printService;
        this.location = location;
        this.router = router;
        this.extrasData = [];
        this._mode = 'show';
        console.log('ClientShowComponent');
        /*
            router.events.pipe(
              filter(event => event instanceof NavigationEnd)
            ).subscribe(() => {
              if (location.path() != '') {
                // console.log('path: ' + location.path());
                // console.log(location.path().substr(location.path().indexOf('/') + 1, location.path().lastIndexOf('/')));
                // console.log(location.path().substring(location.path().indexOf('/') + 1, location.path().lastIndexOf('/')));
                // console.log(location.path().split('/'));
                // console.log(location.path().split('/')[location.path().split('/').length - 2]);
                // console.log(location.path().split('/')[location.path().split('/').length - 1]);
        
                if (location.path().split('/').length > 1) {
                  this.path = location.path().split('/')[location.path().split('/').length - 2];
                } else {
                  this.path = location.path().split('/')[location.path().split('/').length - 1];
                }
                if (this.path === 'show') {
                  this.printService.onDataReady();
                }
              }
            });
        */
        /*
            router.events.subscribe((event) => {
              console.log('event: ' + event);
              // tslint:disable-next-line:triple-equals
              if (location.path() != '') {
                // console.log('path: ' + location.path());
                // console.log(location.path().substr(location.path().indexOf('/') + 1, location.path().lastIndexOf('/')));
                // console.log(location.path().substring(location.path().indexOf('/') + 1, location.path().lastIndexOf('/')));
                // console.log(location.path().split('/'));
                // console.log(location.path().split('/')[location.path().split('/').length - 2]);
                // console.log(location.path().split('/')[location.path().split('/').length - 1]);
        
                if (location.path().split('/').length > 1) {
                  this.path = location.path().split('/')[location.path().split('/').length - 2];
                } else {
                  this.path = location.path().split('/')[location.path().split('/').length - 1];
                }
                if (this.path === 'show') {
                  this.printService.onDataReady();
                }
              }
            });
        */
    }
    ClientShowComponent_1 = ClientShowComponent;
    ClientShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ClientShowComponent ngOnInit');
        // this.form = new FormGroup({
        //   'client': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
        //   'product': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
        //   'address': new FormControl(null, {validators: [Validators.required]}),
        // tslint:disable-next-line: max-line-length
        // 'phone': new FormControl(null, {validators: [Validators.required, Validators.minLength(11), Validators.pattern('[0-9]{2}-[0-9]{8}')]}),
        //    'extras': new FormArray([], minSelectedCheckboxes(this.minimumExtrasSelected))
        // });
        this.form = this.formBuilder.group({
            'client': new forms_1.FormControl(null, { validators: [forms_1.Validators.required, forms_1.Validators.minLength(3)] }),
            'product': new forms_1.FormControl(null, { validators: [forms_1.Validators.required, forms_1.Validators.minLength(3)] }),
            'address': new forms_1.FormControl(null, { validators: [forms_1.Validators.required] }),
            // tslint:disable-next-line: max-line-length
            'phone': new forms_1.FormControl(null, { validators: [forms_1.Validators.required, forms_1.Validators.minLength(11), forms_1.Validators.pattern('[0-9]{2}-[0-9]{8}')] }),
            // 'extras': new FormArray([], minSelectedCheckboxes(this.minimumExtrasSelected))
            'extras': new forms_1.FormArray([], null)
        });
        rxjs_1.of(ClientShowComponent_1.getExtras()).subscribe(function (extras) {
            _this.extrasData = extras;
            _this.addCheckboxes();
        });
        this.route.paramMap.subscribe(function (paramMap) {
            console.log('paramMap: ' + paramMap);
            // Object.keys(paramMap).forEach(e => console.log(`key=${e}  value=${paramMap[e]}`));
            Object.keys(paramMap['params']).forEach(function (e) { return console.log("key=" + e + "  value=" + paramMap['params'][e]); });
            // Object.keys(paramMap['params']).forEach((value1, key1) => {
            //   console.log(key1 + ': ' + value1);
            //   Object.keys(value1).forEach((value2, key2) => {
            //     console.log(key2 + ': ' + value2);
            //   });
            // });
            console.log('paramMap has clientId: ' + paramMap.has('clientId'));
            if (paramMap.has('clientId')) {
                // tslint:disable-next-line:triple-equals
                _this.clientId = paramMap.get('clientId');
                _this.clientService.getClient(_this.clientId).subscribe(function (clientData) {
                    console.log(clientData.extras);
                    // tslint:disable-next-line:max-line-length
                    _this.client = { id: clientData.id, client: clientData.client, product: clientData.product, address: clientData.address, phone: clientData.phone, extras: clientData.extras };
                    // tslint:disable-next-line: max-line-length
                    _this.form.setValue({ client: _this.client.client, product: _this.client.product, address: _this.client.address, phone: _this.client.phone, extras: _this.client.extras });
                    // tslint:disable-next-line:triple-equals
                    _this.printService.onDataReady();
                });
            }
        });
    };
    // tslint:disable-next-line:member-ordering
    ClientShowComponent.getExtras = function () {
        return [
            { id: 1, name: 'pocchuc', description: 'Poc chuc', selected: false },
            { id: 2, name: 'aguacate', description: 'Aguacate', selected: false },
            { id: 3, name: 'cebolla', description: 'Cebolla', selected: false },
            { id: 4, name: 'papa', description: 'Papa', selected: false }
        ];
    };
    Object.defineProperty(ClientShowComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    ClientShowComponent.prototype.addCheckboxes = function () {
        var _this = this;
        this.extrasData.forEach(function (o, i) {
            // const control = new FormControl(i === 0); // if first item set to true, else false, first selected
            var control = new forms_1.FormControl(i === -1); // if first item set to true, else false, no selected
            // const control = new FormControl(o.id);
            // const control = new FormControl(o.name);
            _this.form.controls.extras.push(control);
        });
        console.log(this.form.controls.extras);
        console.log(this.form.controls.extras.get('0'));
    };
    var ClientShowComponent_1;
    ClientShowComponent.ctorParameters = function () { return [
        { type: client_service_1.ClientService },
        { type: router_1.ActivatedRoute },
        { type: forms_1.FormBuilder },
        { type: print_service_1.PrintService },
        { type: common_1.Location },
        { type: router_1.Router }
    ]; };
    ClientShowComponent = ClientShowComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-client-show',
            template: __importDefault(__webpack_require__(/*! raw-loader!./client-show.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client-show/client-show.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./client-show.component.css */ "./src/app/client/client-show/client-show.component.css")).default]
        }),
        __metadata("design:paramtypes", [client_service_1.ClientService, router_1.ActivatedRoute, forms_1.FormBuilder, print_service_1.PrintService, common_1.Location, router_1.Router])
    ], ClientShowComponent);
    return ClientShowComponent;
}());
exports.ClientShowComponent = ClientShowComponent;


/***/ }),

/***/ "./src/app/client/client.service.ts":
/*!******************************************!*\
  !*** ./src/app/client/client.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ClientService = /** @class */ (function () {
    function ClientService(http, router) {
        this.http = http;
        this.router = router;
        this.clients = [];
        this.clientUpdated = new rxjs_1.Subject();
        this.uri = 'http://localhost:3000/api/client/';
    }
    ClientService.prototype.getClients = function (clientPerPage, currentPage) {
        var _this = this;
        var queryParams = "?pagesize=" + clientPerPage + "&page=" + currentPage;
        this.http.get(this.uri + queryParams)
            .pipe(operators_1.map(function (clientData) {
            return {
                clients: clientData.clients.map(function (client) {
                    return {
                        id: client._id,
                        client: client.client,
                        product: client.product,
                        address: client.address,
                        phone: client.phone,
                        extras: client.extras
                    };
                }),
                maxClients: clientData.maxClients
            };
        }))
            .subscribe(function (transformedClientData) {
            console.log(transformedClientData);
            Object.keys(transformedClientData).forEach(function (e) { return console.log("key=" + e + "  value=" + transformedClientData[e]); });
            _this.clients = transformedClientData.clients;
            _this.clientUpdated.next({ clients: _this.clients.slice(), clientCount: transformedClientData.maxClients });
        });
    };
    ClientService.prototype.getClientUpdateListener = function () {
        return this.clientUpdated.asObservable();
    };
    ClientService.prototype.getClient = function (id) {
        return this.http.get(this.uri + id);
    };
    ClientService.prototype.addClient = function (client, product, address, phone, extras) {
        var _this = this;
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data;boundary=' + Math.random());
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ' + btoa('username:password'));
        /*
            console.log(client);
            console.log(product);
            console.log(address);
            console.log(phone);
            console.log(extras);
         */
        var clientData;
        // clientData = new FormData();
        // clientData.append('client', client);
        // clientData.append('product', product);
        // clientData.append('address', address);
        // clientData.append('phone', phone);
        // clientData.append('extras', extras);
        clientData = {
            id: '',
            client: client,
            product: product,
            address: address,
            phone: phone,
            extras: extras
        };
        console.log('Client data to be send to save: ');
        console.log(clientData);
        // clientData.forEach((value, key) => {
        //   console.log(key + ': ' + value);
        // });
        Object.keys(clientData).forEach(function (e) { return console.log("key=" + e + "  value=" + clientData[e]); });
        this.http
            // .post<{ message: string, clientModel: Client }>(this.uri, clientData)
            .post(this.uri, clientData, { headers: headers })
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/']);
        });
    };
    ClientService.prototype.updateClient = function (id, client, product, address, phone, extras) {
        var _this = this;
        var clientData;
        // clientData = new FormData();
        // clientData.append('id', id);
        // clientData.append('client', client);
        // clientData.append('product', product);
        // clientData.append('address', address);
        // clientData.append('phone', phone);
        // clientData.append('extras', extras);
        clientData = {
            id: id,
            client: client,
            product: product,
            address: address,
            phone: phone,
            extras: extras
        };
        console.log('Client data to be send to update: ');
        console.log(clientData);
        // clientData.forEach((value, key) => {
        //   console.log(key + ': ' + value);
        // });
        Object.keys(clientData).forEach(function (e) { return console.log("key=" + e + "  value=" + clientData[e]); });
        this.http.put(this.uri + id, clientData).
            subscribe(function (response) {
            // const updatedPosts = [...this.client];
            console.log(response);
            _this.router.navigate(['/']);
        });
    };
    ClientService.prototype.deleteClient = function (clientId) {
        // this.http.delete(this.uri + postId)
        // .subscribe(() => {
        //   const updatedPosts = this.posts.filter(post => post.id !== postId);
        //   this.posts = updatedPosts;
        //   this.postsUpdated.next([...this.posts]);
        // });
        return this.http.delete(this.uri + clientId);
    };
    ClientService.ctorParameters = function () { return [
        { type: http_1.HttpClient },
        { type: router_1.Router }
    ]; };
    ClientService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxudWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        console.log('HeaderComponent');
    }
    HeaderComponent.prototype.isLoggedIn = function () {
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "MyTitle", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/print/print-layout/print-layout.component.css":
/*!***************************************************************!*\
  !*** ./src/app/print/print-layout/print-layout.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header, .header-space,\r\n.footer, .footer-space { height: 100px; }\r\n.header { position: fixed; top: 0; }\r\n.footer { position: fixed; bottom: 0; }\r\n@media screen {\r\n  :host {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnQvcHJpbnQtbGF5b3V0L3ByaW50LWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO3lCQUN5QixhQUFhLEVBQUU7QUFDeEMsVUFBVSxlQUFlLEVBQUUsTUFBTSxFQUFFO0FBQ25DLFVBQVUsZUFBZSxFQUFFLFNBQVMsRUFBRTtBQUV0QztFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcmludC9wcmludC1sYXlvdXQvcHJpbnQtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLCAuaGVhZGVyLXNwYWNlLFxyXG4uZm9vdGVyLCAuZm9vdGVyLXNwYWNlIHsgaGVpZ2h0OiAxMDBweDsgfVxyXG4uaGVhZGVyIHsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IH1cclxuLmZvb3RlciB7IHBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAwOyB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIHtcclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/print/print-layout/print-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/print/print-layout/print-layout.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var PrintLayoutComponent = /** @class */ (function () {
    function PrintLayoutComponent() {
        console.log('PrintLayoutComponent');
    }
    PrintLayoutComponent.prototype.ngOnInit = function () {
        console.log('PrintLayoutComponent ngOnInit');
    };
    PrintLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-print-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./print-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/print/print-layout/print-layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./print-layout.component.css */ "./src/app/print/print-layout/print-layout.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PrintLayoutComponent);
    return PrintLayoutComponent;
}());
exports.PrintLayoutComponent = PrintLayoutComponent;


/***/ }),

/***/ "./src/app/print/print.service.ts":
/*!****************************************!*\
  !*** ./src/app/print/print.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var PrintService = /** @class */ (function () {
    function PrintService(router) {
        this.router = router;
        this.isPrinting = false;
    }
    PrintService.prototype.printDocument = function (documentName, documentData) {
        console.log('PrintService printDocument');
        this.isPrinting = true;
        // this.onDataReady();
        this.router.navigate(['/', { outlets: {
                    'printArea': ['print', documentName, documentData]
                } }]);
    };
    PrintService.prototype.onDataReady = function () {
        var _this = this;
        console.log('PrintService onDataReady');
        setTimeout(function () {
            window.print();
            _this.isPrinting = false;
            // this.router.navigate([{ outlets: { print: null }}]);
            _this.router.navigate([{ outlets: { printPopup: null } }]);
        });
    };
    PrintService.ctorParameters = function () { return [
        { type: router_1.Router }
    ]; };
    PrintService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], PrintService);
    return PrintService;
}());
exports.PrintService = PrintService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\IdeaProjects\angular-node-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map