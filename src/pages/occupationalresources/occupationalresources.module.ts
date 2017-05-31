import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Occupationalresources } from './occupationalresources';

@NgModule({
  declarations: [
    Occupationalresources,
  ],
  imports: [
    IonicPageModule.forChild(Occupationalresources),
  ],
  exports: [
    Occupationalresources
  ]
})
export class OccupationalresourcesModule {}
