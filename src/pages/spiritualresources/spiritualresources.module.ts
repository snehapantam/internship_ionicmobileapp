import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Spiritualresources } from './spiritualresources';

@NgModule({
  declarations: [
    Spiritualresources,
  ],
  imports: [
    IonicPageModule.forChild(Spiritualresources),
  ],
  exports: [
    Spiritualresources
  ]
})
export class SpiritualresourcesModule {}
