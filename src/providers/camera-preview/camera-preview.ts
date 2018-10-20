import { Injectable } from '@angular/core';
import {CameraPreview, CameraPreviewOptions} from "@ionic-native/camera-preview";

declare var cordova: any;
@Injectable()
export class CameraPreviewProvider {

  constructor(public cameraPreviewPlugin: CameraPreview) {
    console.log('Hello CameraPreviewProvider Provider');
  }

  start(): Promise<any>{
    let cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };
    return this.cameraPreviewPlugin.startCamera(cameraPreviewOpts);
  }

  stop(): Promise<any>{
    return this.cameraPreviewPlugin.stopCamera();
  }
}
