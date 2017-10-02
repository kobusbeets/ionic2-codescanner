import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//https://ionicframework.com/docs/native/barcode-scanner/ 
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 

  scannerData : {};
  options :BarcodeScannerOptions;

  constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner) {

  }

  scan() {
    this.options = {
      prompt : "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      console.log(barcodeData);
      this.scannerData = barcodeData;
    }, (err) => {
        console.log("Error occured : " + err);
    });  
  }
}
