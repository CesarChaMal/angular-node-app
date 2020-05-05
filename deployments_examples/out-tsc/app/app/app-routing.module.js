"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var client_list_component_1 = require("./client/client-list/client-list.component");
var client_create_component_1 = require("./client/client-create/client-create.component");
var login_component_1 = require("./auth/login/login.component");
var logout_component_1 = require("./auth/logout/logout.component");
var signup_component_1 = require("./auth/signup/signup.component");
var auth_guard_1 = require("./auth/auth.guard");
var print_layout_component_1 = require("./print/print-layout/print-layout.component");
var client_show_component_1 = require("./client/client-show/client-show.component");
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
//# sourceMappingURL=app-routing.module.js.map