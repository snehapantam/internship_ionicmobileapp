import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Spiritual } from './spiritual';

@NgModule({
  declarations: [
    Spiritual,
  ],
  imports: [
    IonicPageModule.forChild(Spiritual),
  ],
  exports: [
    Spiritual
  ]
})
export class SpiritualModule {}
