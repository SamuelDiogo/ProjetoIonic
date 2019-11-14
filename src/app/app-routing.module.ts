import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path: 'tab1', children: [{path: '', loadChildren: () =>import('./tab1/tab1.module').then(m => m.Tab1PageModule),canActivate: [AuthGuard]}]},
  {
    path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
