import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  {
    path: 'registrocliente',
    loadChildren: () => import('./registrocliente/registrocliente.module').then( m => m.RegistroclientePageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'generateqr',
    loadChildren: () => import('./generateqr/generateqr.module').then( m => m.GenerateqrPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'gimnasiomovil',
    loadChildren: () => import('./gimnasiomovil/gimnasiomovil.module').then( m => m.GimnasiomovilPageModule)
  },
  {
    path: 'confipay',
    loadChildren: () => import('./confipay/confipay.module').then( m => m.ConfipayPageModule)
  },
  {
    path: 'gim-mov-dis',
    loadChildren: () => import('./gim-mov-dis/gim-mov-dis.module').then( m => m.GimMovDisPageModule)
  },
  {
    path: 'perfiluser',
    loadChildren: () => import('./perfiluser/perfiluser.module').then( m => m.PerfiluserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
