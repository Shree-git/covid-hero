import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostReviewPageRoutingModule } from './post-review-routing.module';

import { PostReviewPage } from './post-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostReviewPageRoutingModule
  ],
  declarations: [PostReviewPage]
})
export class PostReviewPageModule {}
