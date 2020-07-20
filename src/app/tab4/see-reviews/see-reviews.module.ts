import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeReviewsPageRoutingModule } from './see-reviews-routing.module';

import { SeeReviewsPage } from './see-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeReviewsPageRoutingModule
  ],
  declarations: [SeeReviewsPage]
})
export class SeeReviewsPageModule {}
