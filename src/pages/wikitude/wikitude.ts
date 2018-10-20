import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {WikitudeProvider} from "../../providers/wikitude/wikitude";
import {CameraPreviewPage} from "../camera-preview/camera-preview";

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

  showing_wikitude: boolean = false;

  constructor(public navCtrl: NavController, public wikitude: WikitudeProvider, public events: Events) {
    this.events.subscribe('show_wikitude_camera', () => {
      console.log("show_wikitude_camera called");
      this.showing_wikitude = true;
    });
    this.events.subscribe('hide_wikitude_camera', () => {
      console.log("hide_wikitude_camera called");
      this.showing_wikitude = false;
    });
    this.events.subscribe('close_wikitude_camera', () => {
      console.log("close_wikitude_camera called");
      this.showing_wikitude = false;
    });
    this.events.subscribe('open_camera_preview', () => {
      console.log("open_camera_preview called");
      this.showing_wikitude = false;
      this.navCtrl.push(CameraPreviewPage, {from_ar: true});
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad WikitudePage');


  }
  openCameraPreview(){
    this.events.publish('open_camera_preview');
  }

  closeWikitude(){
    this.wikitude.stop().then(() => {
      this.showing_wikitude = false;
    });
  }

  openWikitude(){
    this.wikitude.start(this.showing_wikitude).then(() => {
      this.showing_wikitude = true;
    });
  }


}
