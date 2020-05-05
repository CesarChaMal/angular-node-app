import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../client.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Client} from '../client.model';
import {of} from 'rxjs';
import {PrintService} from 'src/app/print/print.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-client-show',
  templateUrl: './client-show.component.html',
  styleUrls: ['./client-show.component.css']
})
export class ClientShowComponent implements OnInit {
  client: Client;
  form: FormGroup;
  extrasData = [];
  private _mode = 'show';
  private clientId: string;

  // tslint:disable-next-line:max-line-length
  constructor(public clientService: ClientService, public route: ActivatedRoute, private formBuilder: FormBuilder, public printService: PrintService, public location: Location, public router: Router) {
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

  ngOnInit() {
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
      'client': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      'product': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      'address': new FormControl(null, {validators: [Validators.required]}),
      // tslint:disable-next-line: max-line-length
      'phone': new FormControl(null, {validators: [Validators.required, Validators.minLength(11), Validators.pattern('[0-9]{2}-[0-9]{8}')]}),
      // 'extras': new FormArray([], minSelectedCheckboxes(this.minimumExtrasSelected))
      'extras': new FormArray([], null)
    });

    of(ClientShowComponent.getExtras()).subscribe(extras => {
      this.extrasData = extras;
      this.addCheckboxes();
    });

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
        this.clientId = paramMap.get('clientId');
        this.clientService.getClient(this.clientId).subscribe(clientData => {
          console.log(clientData.extras);
          // tslint:disable-next-line:max-line-length
          this.client = {id: clientData.id, client: clientData.client, product: clientData.product, address: clientData.address, phone: clientData.phone, extras: clientData.extras};
          // tslint:disable-next-line: max-line-length
          this.form.setValue({client: this.client.client, product: this.client.product, address: this.client.address, phone: this.client.phone, extras: this.client.extras });
          // tslint:disable-next-line:triple-equals
          this.printService.onDataReady();
        });
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
}
