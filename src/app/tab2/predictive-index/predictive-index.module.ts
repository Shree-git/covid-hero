import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredictiveIndexPageRoutingModule } from './predictive-index-routing.module';

import { PredictiveIndexPage } from './predictive-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredictiveIndexPageRoutingModule
  ],
  declarations: [PredictiveIndexPage]
})
export class PredictiveIndexPageModule {}
