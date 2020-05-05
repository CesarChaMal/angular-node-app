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
    ClientCreateComponent = ClientCreateComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-client-create',
            templateUrl: './client-create.component.html',
            styleUrls: ['./client-create.component.css']
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
//# sourceMappingURL=client-create.component.js.map