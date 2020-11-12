import { Pipe, PipeTransform } from '@angular/core';

/*
* Exponente por default 1
* Uso
* Valor | elevar:exponente
* Ejemplo : {{2 | elevar:10}}
* devuelve: 1024
*/

@Pipe({
  name: 'elevar'
})
export class NombrePipe implements PipeTransform {

  transform(value: number, exponente?: number): number {
    return Math.pow(value, isNaN(exponente) ? 1 : exponente);
  }

}
