import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayPhotoPageRoutingModule } from './display-photo-routing.module';

import { DisplayPhotoPage } from './display-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayPhotoPageRoutingModule
  ],
  declarations: [DisplayPhotoPage]
})
export class DisplayPhotoPageModule {}
