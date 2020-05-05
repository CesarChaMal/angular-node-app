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
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var router_1 = require("@angular/router");
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
    ClientService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map