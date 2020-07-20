import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { IonicModule } from '@ionic/angular';

import { PredictiveIndexPageRoutingModule } from './predictive-index-routing.module';

import { PredictiveIndexPage } from './predictive-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredictiveIndexPageRoutingModule,
    ChartsModule
  ],
  declarations: [PredictiveIndexPage]
})
export class PredictiveIndexPageModule {}
