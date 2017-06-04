import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Emotionalgoals } from './emotionalgoals';

@NgModule({
  declarations: [
    Emotionalgoals,
  ],
  imports: [
    IonicPageModule .forChild(Emotionalgoals),
  ],
  exports: [
    Emotionalgoals
  ]
})
export class EmotionalgoalsModule {}
