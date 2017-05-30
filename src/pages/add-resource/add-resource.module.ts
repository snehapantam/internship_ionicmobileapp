import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddResource } from './add-resource';

@NgModule({
  declarations: [
    AddResource,
  ],
  imports: [
    IonicPageModule.forChild(AddResource),
  ],
  exports: [
    AddResource
  ]
})
export class AddResourceModule {}
