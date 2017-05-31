import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Intellectual } from './intellectual';

@NgModule({
  declarations: [
    Intellectual,
  ],
  imports: [
    IonicPageModule.forChild(Intellectual),
  ],
  exports: [
    Intellectual
  ]
})
export class IntellectualModule {}
