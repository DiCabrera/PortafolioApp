import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElegirPropiedadPage } from './elegir-propiedad.page';

const routes: Routes = [
  {
    path: '',
    component: ElegirPropiedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElegirPropiedadPageRoutingModule {}
