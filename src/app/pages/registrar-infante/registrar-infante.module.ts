import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarInfantePageRoutingModule } from './registrar-infante-routing.module';

import { RegistrarInfantePage } from './registrar-infante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarInfantePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarInfantePage]
})
export class RegistrarInfantePageModule {}
