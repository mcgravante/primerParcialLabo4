import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../clases/producto';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value, args: string[]): any {
    let productosLista: Producto[] = JSON.parse(value)
    return productosLista;
  }

}
