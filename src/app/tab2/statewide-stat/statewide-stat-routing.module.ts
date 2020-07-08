import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatewideStatPage } from './statewide-stat.page';

const routes: Routes = [
  {
    path: '',
    component: StatewideStatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatewideStatPageRoutingModule {}
