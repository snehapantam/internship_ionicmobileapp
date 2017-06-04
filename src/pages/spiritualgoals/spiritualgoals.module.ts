import { NgModule } from '@angular/core';
import { IonicPageModule  } from 'ionic-angular';
import { Spiritualgoals } from './spiritualgoals';

@NgModule({
  declarations: [
    Spiritualgoals,
  ],
  imports: [
    IonicPageModule .forChild(Spiritualgoals),
  ],
  exports: [
    Spiritualgoals
  ]
})
export class SpiritualgoalsModule {}
