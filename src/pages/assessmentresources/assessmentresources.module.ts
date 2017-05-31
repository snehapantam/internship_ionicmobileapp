import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Assessmentresources } from './assessmentresources';

@NgModule({
  declarations: [
    Assessmentresources,
  ],
  imports: [
    IonicPageModule.forChild(Assessmentresources),
  ],
  exports: [
    Assessmentresources
  ]
})
export class AssessmentresourcesModule {}
