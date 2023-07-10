import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GimnasiomovilPage } from './gimnasiomovil.page';

const routes: Routes = [
  {
    path: '',
    component: GimnasiomovilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GimnasiomovilPageRoutingModule {}
