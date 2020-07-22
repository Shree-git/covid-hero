import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  },
  {
    path: 'see-reviews/:business',
    loadChildren: () => import('./see-reviews/see-reviews.module').then( m => m.SeeReviewsPageModule)
  },
  {
    path: 'post-review/:business',
    loadChildren: () => import('./post-review/post-review.module').then( m => m.PostReviewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
