import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPropiedadPageRoutingModule } from './registrar-propiedad-routing.module';

import { RegistrarPropiedadPage } from './registrar-propiedad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPropiedadPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarPropiedadPage, ]
})
export class RegistrarPropiedadPageModule {}
