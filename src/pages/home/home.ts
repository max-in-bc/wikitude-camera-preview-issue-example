import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CameraPreviewPage} from "../camera-preview/camera-preview";
import {WikitudePage} from "../wikitude/wikitude";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

  openCameraPreview(){
    this.navCtrl.push(CameraPreviewPage);
  }
  openWikitude(){
    this.navCtrl.push(WikitudePage);
  }



}
