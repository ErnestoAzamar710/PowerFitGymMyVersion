import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfipayPageRoutingModule } from './confipay-routing.module';

import { ConfipayPage } from './confipay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfipayPageRoutingModule
  ],
  declarations: [ConfipayPage]
})
export class ConfipayPageModule {}
