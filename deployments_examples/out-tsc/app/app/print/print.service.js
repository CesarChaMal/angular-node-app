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
var router_1 = require("@angular/router");
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
    PrintService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], PrintService);
    return PrintService;
}());
exports.PrintService = PrintService;
//# sourceMappingURL=print.service.js.map