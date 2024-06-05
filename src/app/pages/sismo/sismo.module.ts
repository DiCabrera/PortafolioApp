import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SismoPageRoutingModule } from './sismo-routing.module';

import { SismoPage } from './sismo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SismoPageRoutingModule
  ],
  declarations: [SismoPage]
})
export class SismoPageModule {}
