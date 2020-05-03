import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, ValidatorFn } from '@angular/forms';
import { ClientService } from '../client.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Client } from '../client.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  client: Client;
  // extras = { pocchuc: false, aguacate: false, cebolla: false, papa: false };
  // extras = [ 'Poc chuc', 'Aguacate', 'Cebolla', 'Papa'];
  isLoading = false;
  form: FormGroup;
  extrasData = [];
  minimumExtrasSelected = 1;
  totalExtrasSelected = 0;
  private mode = 'create';
  private clientId: string;

  constructor(public clientService: ClientService, public route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit() {
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

    of(this.getExtras()).subscribe(extras => {
      this.extrasData = extras;
      this.addCheckboxes();
    });

    console.log('Minim extras selected: ' + this.minimumExtrasSelected);
    console.log('Total extras selected: ' + this.totalExtrasSelected);

    this.route.paramMap.subscribe( (paramMap: ParamMap) => {
      console.log('paramMap has clientId: ' + paramMap.has('clientId'));
      if (paramMap.has('clientId')) {
        this.mode = 'edit';
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
          this.totalSelected();
        });
      } else {
        this.mode = 'create';
        this.clientId = null;
      }
    });
  }

  private getExtras() {
     return [
       { id: 1, name: 'pocchuc', description: 'Poc chuc', selected: false },
       { id: 2, name: 'aguacate', description: 'Aguacate', selected: false },
       { id: 3, name: 'cebolla', description: 'Cebolla', selected: false },
       { id: 4, name: 'papa', description: 'Papa', selected: false }
      ];
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
    if (this.form.invalid) {
      return;
    }

    const selectedExtrasIds = this.form.value.extras
      .map((v, i) => (v ? this.extrasData[i].id : null))
      .filter(v => v !== null);
    console.log(selectedExtrasIds);

    this.isLoading = true;
    console.log('mode: ' + this.mode);
    console.log('form: ');
    // Object.keys(this.form).forEach(e => console.log(`key=${e}  value=${this.form[e]}`));
    Object.keys(this.form.value).forEach(e => console.log(`key=${e}  value=${this.form.value[e]}`));
    if (this.mode === 'create') {
          // tslint:disable-next-line: max-line-length
          this.clientService.addClient(this.form.value.client, this.form.value.product, this.form.value.address, this.form.value.phone, this.form.value.extras);
    } else {
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


