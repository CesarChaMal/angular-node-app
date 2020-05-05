import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;

  constructor(private router: Router) { }

  printDocument(documentName: string, documentData: string) {
    console.log('PrintService printDocument');
    this.isPrinting = true;
    // this.onDataReady();
    this.router.navigate(['/', { outlets: {
        'printArea': ['print', documentName, documentData]
    }}]);
  }

  onDataReady() {
    console.log('PrintService onDataReady');
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      // this.router.navigate([{ outlets: { print: null }}]);
      this.router.navigate([{ outlets: { printPopup: null }}]);
    });
  }
}
