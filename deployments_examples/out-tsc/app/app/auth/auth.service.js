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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
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
    AuthService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map