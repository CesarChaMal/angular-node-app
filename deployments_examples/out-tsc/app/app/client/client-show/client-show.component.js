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
var forms_1 = require("@angular/forms");
var client_service_1 = require("../client.service");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var print_service_1 = require("src/app/print/print.service");
var common_1 = require("@angular/common");
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
    ClientShowComponent = ClientShowComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-client-show',
            templateUrl: './client-show.component.html',
            styleUrls: ['./client-show.component.css']
        }),
        __metadata("design:paramtypes", [client_service_1.ClientService, router_1.ActivatedRoute, forms_1.FormBuilder, print_service_1.PrintService, common_1.Location, router_1.Router])
    ], ClientShowComponent);
    return ClientShowComponent;
}());
exports.ClientShowComponent = ClientShowComponent;
//# sourceMappingURL=client-show.component.js.map