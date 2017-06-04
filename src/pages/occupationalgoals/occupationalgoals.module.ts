import { NgModule } from '@angular/core';
import { IonicPageModule  } from 'ionic-angular';
import { Occupationalgoals } from './occupationalgoals';

@NgModule({
  declarations: [
    Occupationalgoals,
  ],
  imports: [
    IonicPageModule.forChild(Occupationalgoals),
  ],
  exports: [
    Occupationalgoals
  ]
})
export class OccupationalgoalsModule {}
