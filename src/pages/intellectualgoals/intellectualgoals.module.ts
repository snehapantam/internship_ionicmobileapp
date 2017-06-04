import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Intellectualgoals } from './intellectualgoals';

@NgModule({
  declarations: [
    Intellectualgoals,
  ],
  imports: [
    IonicPageModule .forChild(Intellectualgoals),
  ],
  exports: [
    Intellectualgoals
  ]
})
export class IntellectualgoalsModule {}
