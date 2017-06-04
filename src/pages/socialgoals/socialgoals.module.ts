import { NgModule } from '@angular/core';
import { IonicPageModule  } from 'ionic-angular';
import { Socialgoals } from './socialgoals';

@NgModule({
  declarations: [
    Socialgoals,
  ],
  imports: [
    IonicPageModule .forChild(Socialgoals),
  ],
  exports: [
    Socialgoals
  ]
})
export class SocialgoalsModule {}
