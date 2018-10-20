import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CameraPreview } from '@ionic-native/camera-preview';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WikitudeProvider } from '../providers/wikitude/wikitude';
import { CameraPreviewProvider } from '../providers/camera-preview/camera-preview';
import {CameraPreviewPage} from "../pages/camera-preview/camera-preview";
import {WikitudePage} from "../pages/wikitude/wikitude";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WikitudePage,
    CameraPreviewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WikitudePage,
    CameraPreviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CameraPreview,
    WikitudeProvider,
    CameraPreviewProvider
  ]
})
export class AppModule {}
