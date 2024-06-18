import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarInfantePage } from './registrar-infante.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarInfantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarInfantePageRoutingModule {}
