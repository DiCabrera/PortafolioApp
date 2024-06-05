import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SismoPage } from './sismo.page';

const routes: Routes = [
  {
    path: '',
    component: SismoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SismoPageRoutingModule {}
