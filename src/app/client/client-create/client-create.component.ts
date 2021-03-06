import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, ValidatorFn } from '@angular/forms';
import { ClientService } from '../client.service';
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from '@angular/router';
import { Client } from '../client.model';
import { of } from 'rxjs';
import { PrintService } from 'src/app/print/print.service';
import { Location } from '@angular/common';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  client: Client;
  isLoading = false;
  form: FormGroup;
  extrasData = [];
  minimumExtrasSelected = 1;
  totalExtrasSelected = 0;
  private _mode = 'create';
  private clientId: string;
  private path: string;

  // tslint:disable-next-line:max-line-length
  constructor(public clientService: ClientService, public route: ActivatedRoute, private formBuilder: FormBuilder, public printService: PrintService, public location: Location, public router: Router) {
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

  ngOnInit() {
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
      'client': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      'product': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      'address': new FormControl(null, {validators: [Validators.required]}),
      // tslint:disable-next-line: max-line-length
      'phone': new FormControl(null, {validators: [Validators.required, Validators.minLength(11), Validators.pattern('[0-9]{2}-[0-9]{8}')]}),
      'extras': new FormArray([], minSelectedCheckboxes(this.minimumExtrasSelected))
    });

    of(ClientCreateComponent.getExtras()).subscribe(extras => {
      this.extrasData = extras;
      this.addCheckboxes();
    });

    console.log('Minim extras selected: ' + this.minimumExtrasSelected);
    console.log('Total extras selected: ' + this.totalExtrasSelected);

    this.route.paramMap.subscribe( (paramMap: ParamMap) => {
      console.log('paramMap: ' + paramMap);
      // Object.keys(paramMap).forEach(e => console.log(`key=${e}  value=${paramMap[e]}`));
      Object.keys(paramMap['params']).forEach(e => console.log(`key=${e}  value=${paramMap['params'][e]}`));
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
        this._mode = 'edit';
        this.clientId = paramMap.get('clientId');
        this.isLoading = true;
        this.clientService.getClient(this.clientId).subscribe(clientData => {
          this.isLoading = false;
          // tslint:disable-next-line: max-line-length
          // this.client = {id: clientData._id, client: clientData.client, product: clientData.product, address: clientData.address, phone: clientData.phone, extras: clientData.extras};
          // tslint:disable-next-line: max-line-length
          this.client = {id: clientData.id, client: clientData.client, product: clientData.product, address: clientData.address, phone: clientData.phone, extras: clientData.extras};
          console.log(clientData);
          console.log('clientData.id: ' + clientData.id);
          // console.log('clientData._id: ' + clientData._id);
          console.log('clientData.client: ' + clientData.client);
          console.log(this.client);

          // tslint:disable-next-line: max-line-length
          this.form.setValue({client: this.client.client, product: this.client.product, address: this.client.address, phone: this.client.phone, extras: this.client.extras });
          // tslint:disable-next-line:triple-equals
          this.totalSelected();
        });
      } else {
        this._mode = 'create';
        this.clientId = null;
      }
    });
  }

  // tslint:disable-next-line:member-ordering
  private static getExtras() {
     return [
       { id: 1, name: 'pocchuc', description: 'Poc chuc', selected: false },
       { id: 2, name: 'aguacate', description: 'Aguacate', selected: false },
       { id: 3, name: 'cebolla', description: 'Cebolla', selected: false },
       { id: 4, name: 'papa', description: 'Papa', selected: false }
      ];
  }

  get mode(): string {
    return this._mode;
  }

  set mode(value: string) {
    this._mode = value;
  }

  private addCheckboxes() {
    this.extrasData.forEach((o, i) => {
      // const control = new FormControl(i === 0); // if first item set to true, else false, first selected
      const control = new FormControl(i === -1); // if first item set to true, else false, no selected
      // const control = new FormControl(o.id);
      // const control = new FormControl(o.name);
      (this.form.controls.extras as FormArray).push(control);
    });
    console.log(this.form.controls.extras);
    console.log(this.form.controls.extras.get('0'));
  }

  onSaveClient() {
    console.log('onSaveClient');
    if (this.form.invalid) {
      return;
    }
    const selectedExtrasIds = this.form.value.extras
      .map((v, i) => (v ? this.extrasData[i].id : null))
      .filter(v => v !== null);
    console.log(selectedExtrasIds);

    this.isLoading = true;
    console.log('onSaveClient mode: ' + this._mode);
    console.log('form: ');
    // Object.keys(this.form).forEach(e => console.log(`key=${e}  value=${this.form[e]}`));
    Object.keys(this.form.value).forEach(e => console.log(`key=${e}  value=${this.form.value[e]}`));
    if (this._mode === 'create') {
          // tslint:disable-next-line: max-line-length
          this.clientService.addClient(this.form.value.client, this.form.value.product, this.form.value.address, this.form.value.phone, this.form.value.extras);
    } else if (this._mode === 'edit') {
          // tslint:disable-next-line: max-line-length
          this.clientService.updateClient(this.clientId, this.form.value.client, this.form.value.product, this.form.value.address, this.form.value.phone, this.form.value.extras);
    }
    // this.form.reset
    this.form.reset();
  }

  totalSelected() {
    // console.log(this.totalExtrasSelected);
    // console.log(this.form.value.extras);
    // console.log(this.form.controls.extras);
    this.totalExtrasSelected = totalSelected(this.form.controls.extras as FormArray);
    return this.totalExtrasSelected;
  }

  reset() {
    this.form.reset();
  }

  printOrder() {
    // const clientArray = JSON.stringify(this.client);
    // this.printService.printDocument('show', this.clientId);
    this.printService.printDocument('show', this.clientId);
    // this.printService.printDocument('print', this.clientId);
    // this.printService.onDataReady();
  }
}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    // const totalSelected = formArray.controls
    //   .map(control => control.value)
    //   .reduce((prev, next) => next ? prev + next : prev, 0);
    return totalSelected(formArray) >= min ? null : { required: true };
  };
  return validator;
}

function totalSelected(formArray: FormArray) {
  return formArray.controls
    .map(control => control.value)
    .reduce((prev, next) => next ? prev + next : prev, 0);
}
//
