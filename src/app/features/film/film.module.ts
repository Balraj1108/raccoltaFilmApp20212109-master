import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCreateComponent } from './film-create/film-create.component';
import { FormsModule } from '@angular/forms';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: FilmListComponent
  },
  {
    path: 'create',
    component: FilmCreateComponent
  },
  {
    path: 'edit/:id',
    component: FilmCreateComponent
  },
  {
    path: 'detail/:id',
    component: FilmDetailComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
 
];

@NgModule({
  declarations: [
    FilmCreateComponent,
    FilmListComponent,
    FilmDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class FilmModule { }
