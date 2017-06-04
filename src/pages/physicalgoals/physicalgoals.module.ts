import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Physicalgoals } from './physicalgoals';

@NgModule({
  declarations: [
    Physicalgoals,
  ],
  imports: [
    IonicPageModule.forChild(Physicalgoals),
  ],
  exports: [
    Physicalgoals
  ]
})
export class PhysicalgoalsModule {}
