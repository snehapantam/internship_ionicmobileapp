import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Assessmentgoals } from './assessmentgoals';

@NgModule({
  declarations: [
    Assessmentgoals,
  ],
  imports: [
    IonicPageModule .forChild(Assessmentgoals),
  ],
  exports: [
    Assessmentgoals
  ]
})
export class AssessmentgoalsModule {}
