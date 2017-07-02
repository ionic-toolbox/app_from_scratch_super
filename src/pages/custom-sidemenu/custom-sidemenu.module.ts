import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomSidemenuPage } from './custom-sidemenu';

@NgModule({
  declarations: [
    CustomSidemenuPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomSidemenuPage),
  ],
  exports: [
    CustomSidemenuPage
  ]
})
export class CustomSidemenuPageModule { }
