import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElegirPropiedadPageRoutingModule } from './elegir-propiedad-routing.module';

import { ElegirPropiedadPage } from './elegir-propiedad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElegirPropiedadPageRoutingModule
  ],
  declarations: [ElegirPropiedadPage]
})
export class ElegirPropiedadPageModule {}
