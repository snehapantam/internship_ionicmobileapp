import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Emotionalresources } from './emotionalresources';

@NgModule({
  declarations: [
    Emotionalresources,
  ],
  imports: [
    IonicPageModule.forChild(Emotionalresources),
  ],
  exports: [
    Emotionalresources
  ]
})
export class EmotionalresourcesModule {}
