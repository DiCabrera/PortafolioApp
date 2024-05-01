import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfantePage } from './infante.page';

const routes: Routes = [
  {
    path: '',
    component: InfantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfantePageRoutingModule {}
