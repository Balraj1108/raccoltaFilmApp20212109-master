import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsUserLoggedDirective } from './directives/is-user-logged.directive';
import { DecodificaSessoPipe } from './pipes/decodifica-sesso.pipe';
import { IfRolesDirective } from './directives/if-roles.directive';



@NgModule({
  declarations: [
    IsUserLoggedDirective,
    DecodificaSessoPipe,
    IfRolesDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IsUserLoggedDirective,
    DecodificaSessoPipe,
    IfRolesDirective
  ]
})
export class SharedModule { }
