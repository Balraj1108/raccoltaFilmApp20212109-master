import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./features/welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: 'regista',
    loadChildren: () => import('./features/regista/regista.module').then(m => m.RegistaModule),
  },
  {
    path: 'film',
    loadChildren: () => import('./features/film/film.module').then(m => m.FilmModule),
  },
 // { path: 'regista/create', component: RegistaCreateComponent },
  //{ path: 'film/list', component: FilmListComponent },
 // { path: 'film/create', component: FilmCreateComponent },
  //{ path: 'film/:id', component: FilmDetailComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
