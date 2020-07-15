import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredictiveIndexPage } from './predictive-index.page';

const routes: Routes = [
  {
    path: '',
    component: PredictiveIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredictiveIndexPageRoutingModule {}
