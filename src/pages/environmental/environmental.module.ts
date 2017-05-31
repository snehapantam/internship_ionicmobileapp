import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Environmental } from './environmental';

@NgModule({
  declarations: [
    Environmental,
  ],
  imports: [
    IonicPageModule.forChild(Environmental),
  ],
  exports: [
    Environmental
  ]
})
export class EnvironmentalModule {}
