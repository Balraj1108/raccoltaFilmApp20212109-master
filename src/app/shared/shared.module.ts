import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsUserLoggedDirective } from './directives/is-user-logged.directive';
import { DecodificaSessoPipe } from './pipes/decodifica-sesso.pipe';



@NgModule({
  declarations: [
    IsUserLoggedDirective,
    DecodificaSessoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IsUserLoggedDirective,
    DecodificaSessoPipe
  ]
})
export class SharedModule { }
