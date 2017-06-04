import { NgModule } from '@angular/core';
import { IonicPageModule  } from 'ionic-angular';
import { Environmentalgoals } from './environmentalgoals';

@NgModule({
  declarations: [
    Environmentalgoals,
  ],
  imports: [
    IonicPageModule .forChild(Environmentalgoals),
  ],
  exports: [
    Environmentalgoals
  ]
})
export class EnvironmentalgoalsModule {}
