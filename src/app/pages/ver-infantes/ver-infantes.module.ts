import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerInfantesPageRoutingModule } from './ver-infantes-routing.module';

import { VerInfantesPage } from './ver-infantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerInfantesPageRoutingModule
  ],
  declarations: [VerInfantesPage]
})
export class VerInfantesPageModule {}
