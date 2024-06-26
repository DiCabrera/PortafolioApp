import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'llamada',
    loadChildren: () => import('./pages/llamada/llamada.module').then( m => m.LlamadaPageModule)
  },
  {
    path: 'infante/:infanteId',
    loadChildren: () => import('./pages/infante/infante.module').then( m => m.InfantePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./pages/ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  },
  {
    path: 'home/:propiedadId',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./pages/recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'elegir-propiedad',
    loadChildren: () => import('./pages/elegir-propiedad/elegir-propiedad.module').then( m => m.ElegirPropiedadPageModule)
  },
  {
    path: 'registrar-propiedad',
    loadChildren: () => import('./pages/registrar-propiedad/registrar-propiedad.module').then( m => m.RegistrarPropiedadPageModule)
  },
  {
    path: 'bomberos',
    loadChildren: () => import('./pages/bomberos/bomberos.module').then( m => m.BomberosPageModule)
  },
  {
    path: 'salud',
    loadChildren: () => import('./pages/salud/salud.module').then( m => m.SaludPageModule)
  },
  {
    path: 'sismo',
    loadChildren: () => import('./pages/sismo/sismo.module').then( m => m.SismoPageModule)
  },
  {
    path: 'ver-infantes/:propiedadId',
    loadChildren: () => import('./pages/ver-infantes/ver-infantes.module').then( m => m.VerInfantesPageModule)
  },
  {
    path: 'registrar-infante/:propiedadId',
    loadChildren: () => import('./pages/registrar-infante/registrar-infante.module').then( m => m.RegistrarInfantePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
