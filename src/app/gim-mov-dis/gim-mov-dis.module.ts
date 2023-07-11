import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GimMovDisPageRoutingModule } from './gim-mov-dis-routing.module';

import { GimMovDisPage } from './gim-mov-dis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GimMovDisPageRoutingModule
  ],
  declarations: [GimMovDisPage]
})
export class GimMovDisPageModule {}
