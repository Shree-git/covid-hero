import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayPhotoPage } from './display-photo.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayPhotoPageRoutingModule {}
