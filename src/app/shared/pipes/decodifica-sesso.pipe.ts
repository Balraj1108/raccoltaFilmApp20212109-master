import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodificaSesso'
})
export class DecodificaSessoPipe implements PipeTransform {

  //possiamo aggiungere n valori
  transform(sesso: string, ...args: string[]): string {
    return sesso === "MASCHIO" ? "M" : "F";
  }

}
