import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GimnasiomovilPageRoutingModule } from './gimnasiomovil-routing.module';

import { GimnasiomovilPage } from './gimnasiomovil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GimnasiomovilPageRoutingModule
  ],
  declarations: [GimnasiomovilPage]
})
export class GimnasiomovilPageModule {}
