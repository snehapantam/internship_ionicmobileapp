import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Physicalresources } from './physicalresources';

@NgModule({
  declarations: [
    Physicalresources,
  ],
  imports: [
    IonicPageModule.forChild(Physicalresources),
  ],
  exports: [
    Physicalresources
  ]
})
export class PhysicalresourcesModule {}
