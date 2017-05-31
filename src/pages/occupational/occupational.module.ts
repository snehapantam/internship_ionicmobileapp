import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Occupational } from './occupational';

@NgModule({
  declarations: [
    Occupational,
  ],
  imports: [
    IonicPageModule.forChild(Occupational),
  ],
  exports: [
    Occupational
  ]
})
export class OccupationalModule {}
