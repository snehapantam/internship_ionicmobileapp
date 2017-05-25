import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Emotional } from './emotional';

@NgModule({
  declarations: [
    Emotional,
  ],
  imports: [
    IonicPageModule.forChild(Emotional),
  ],
  exports: [
    Emotional
  ]
})
export class EmotionalModule {}
