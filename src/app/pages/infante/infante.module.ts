import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfantePageRoutingModule } from './infante-routing.module';

import { InfantePage } from './infante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfantePageRoutingModule
  ],
  declarations: [InfantePage]
})
export class InfantePageModule {}
