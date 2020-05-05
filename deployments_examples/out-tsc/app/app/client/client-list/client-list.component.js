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
var client_service_1 = require("../client.service");
var material_1 = require("@angular/material");
var myPaginatorEs_1 = require("./myPaginatorEs");
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
    ClientListComponent = __decorate([
        core_1.Component({
            selector: 'app-client-list',
            templateUrl: './client-list.component.html',
            styleUrls: ['./client-list.component.css'],
            providers: [{ provide: material_1.MatPaginatorIntl, useClass: myPaginatorEs_1.MatPaginatorIntlEs }]
            // providers: [{provide: MatPaginatorIntl, useClass: MatPaginatorIntlPo}]
        }),
        __metadata("design:paramtypes", [client_service_1.ClientService])
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;
//# sourceMappingURL=client-list.component.js.map