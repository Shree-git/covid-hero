import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatewideStatPageRoutingModule } from './statewide-stat-routing.module';

import { StatewideStatPage } from './statewide-stat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatewideStatPageRoutingModule
  ],
  declarations: [StatewideStatPage]
})
export class StatewideStatPageModule {}
