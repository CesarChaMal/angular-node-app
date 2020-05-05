import { Component } from '@angular/core';
import { PrintService} from './print/print.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-node-app';

  constructor(public printService: PrintService) {
    console.log('AppComponent');
  }

}
