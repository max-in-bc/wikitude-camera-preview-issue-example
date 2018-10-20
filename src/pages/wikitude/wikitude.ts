import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {WikitudeProvider} from "../../providers/wikitude/wikitude";
import {CameraPreviewPage} from "../camera-preview/camera-preview";
import {BarcodeScannerPage} from "../barcode-scanner/barcode-scanner";

/**
 * Generated class for the WikitudePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wikitude',
  templateUrl: 'wikitude.html',
})
export class WikitudePage {


  constructor(public navCtrl: NavController, public wikitude: WikitudeProvider, public events: Events) {
    this.events.subscribe('show_wikitude_camera', () => {
      console.log("show_wikitude_camera called");
    });
    this.events.subscribe('hide_wikitude_camera', () => {
      console.log("hide_wikitude_camera called");
    });
    this.events.subscribe('close_wikitude_camera', () => {
      console.log("close_wikitude_camera called");
    });
    this.events.subscribe('open_camera_preview', () => {
      console.log("open_camera_preview called");
      this.navCtrl.push(CameraPreviewPage, {from_ar: true});
    });
    this.events.subscribe('open_barcode_scanner', () => {
      console.log("open_barcode_scanner called");
      this.navCtrl.push(BarcodeScannerPage, {from_ar: true});
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad WikitudePage');


  }
  openCameraPreview(){
    this.navCtrl.push(CameraPreviewPage, {from_ar: true});
  }

  openBarcodeScanner(){
    this.navCtrl.push(BarcodeScannerPage, {from_ar: true});
  }

  closeWikitude(){
    this.wikitude.stop();
  }

  openWikitude(){
    this.wikitude.start();
  }


}
