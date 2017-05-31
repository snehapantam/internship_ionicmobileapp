import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Socialresources } from './socialresources';

@NgModule({
  declarations: [
    Socialresources,
  ],
  imports: [
    IonicPageModule.forChild(Socialresources),
  ],
  exports: [
    Socialresources
  ]
})
export class SocialresourcesModule {}
