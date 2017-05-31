import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Assessment } from './assessment';

@NgModule({
  declarations: [
    Assessment,
  ],
  imports: [
    IonicPageModule.forChild(Assessment),
  ],
  exports: [
    Assessment
  ]
})
export class AssessmentModule {}
