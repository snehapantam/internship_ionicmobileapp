import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Intellectualresources } from './intellectualresources';

@NgModule({
  declarations: [
    Intellectualresources,
  ],
  imports: [
    IonicPageModule.forChild(Intellectualresources),
  ],
  exports: [
    Intellectualresources
  ]
})
export class IntellectualresourcesModule {}
