import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WikitudePage } from './wikitude';

@NgModule({
  declarations: [
    WikitudePage,
  ],
  imports: [
    IonicPageModule.forChild(WikitudePage),
  ],
})
export class WikitudePageModule {}
