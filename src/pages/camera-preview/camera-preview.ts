import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {CameraPreviewProvider} from "../../providers/camera-preview/camera-preview";
import {WikitudeProvider} from "../../providers/wikitude/wikitude";

/**
 * Generated class for the CameraPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera-preview',
  templateUrl: 'camera-preview.html',
})
export class CameraPreviewPage {

  showing_cp: boolean = false;
  from_ar: boolean = false;

  constructor(public wikitude: WikitudeProvider, public navCtrl: NavController, public navParams: NavParams, public cp: CameraPreviewProvider, public events: Events) {
    this.from_ar = this.navParams.get("from_ar") || false;
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad CameraPreviewPage');
    this.cp.start().then(() => this.showing_cp = true);
  }

  closeCameraPreview(){
    this.navCtrl.pop();
  }

  ionViewWillLeave(){
    this.cp.stop().then(() => {
      if (this.from_ar){
        this.events.publish('show_wikitude_camera');
        this.wikitude.showWikitudeCamera();
      }
    });
  }

}
