import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {WikitudeProvider} from "../../providers/wikitude/wikitude";
import {CameraPreviewPage} from "../camera-preview/camera-preview";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {
  from_ar: boolean = false;

  constructor(public navCtrl: NavController, public bs: BarcodeScanner, public navParams: NavParams, public events: Events, public wikitude: WikitudeProvider){
    this.from_ar = this.navParams.get("from_ar") || false;
    this.bs.scan().then((result) => {
      this.navCtrl.pop();
    }).catch((err) => {
      this.navCtrl.pop();
    });

  }

  ionViewWillLeave(){
    if (this.from_ar){
      this.events.publish('show_wikitude_camera');
      this.wikitude.showWikitudeCamera();
    }
  }
}
