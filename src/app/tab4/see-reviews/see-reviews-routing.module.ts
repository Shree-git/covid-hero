import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeReviewsPage } from './see-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: SeeReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeReviewsPageRoutingModule {}
