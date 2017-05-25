import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Physical } from './physical';

@NgModule({
  declarations: [
    Physical,
  ],
  imports: [
    IonicPageModule.forChild(Physical),
  ],
  exports: [
    Physical
  ]
})
export class PhysicalModule {}
