import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostReviewPageRoutingModule } from './post-review-routing.module';

import { PostReviewPage } from './post-review.page';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostReviewPageRoutingModule,
    MatButtonToggleModule
  ],
  declarations: [PostReviewPage]
})
export class PostReviewPageModule {}
