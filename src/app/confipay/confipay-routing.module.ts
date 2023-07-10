import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfipayPage } from './confipay.page';

const routes: Routes = [
  {
    path: '',
    component: ConfipayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfipayPageRoutingModule {}
