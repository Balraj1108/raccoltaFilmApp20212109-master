import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./features/welcome/welcome.module').then(m => m.WelcomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'regista',
    loadChildren: () => import('./features/regista/regista.module').then(m => m.RegistaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'film',
    loadChildren: () => import('./features/film/film.module').then(m => m.FilmModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),
  },
 // { path: 'regista/create', component: RegistaCreateComponent },
  //{ path: 'film/list', component: FilmListComponent },
 // { path: 'film/create', component: FilmCreateComponent },
  //{ path: 'film/:id', component: FilmDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '*', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', redirectTo: '/welcome', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
