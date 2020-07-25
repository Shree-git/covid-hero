import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage
  },
  {
    path: 'display-photo',
    loadChildren: () => import('./display-photo/display-photo.module').then( m => m.DisplayPhotoPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'change-email',
    loadChildren: () => import('./change-email/change-email.module').then( m => m.ChangeEmailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
