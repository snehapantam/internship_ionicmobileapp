import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Environmentalresources } from './environmentalresources';

@NgModule({
  declarations: [
    Environmentalresources,
  ],
  imports: [
    IonicPageModule.forChild(Environmentalresources),
  ],
  exports: [
    Environmentalresources
  ]
})
export class EnvironmentalresourcesModule {}
