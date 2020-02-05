import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  transform(datos: any, busqueda: string): any {
    console.trace('----------PIPE EMPIEZA--------');
    console.trace(datos);
    console.trace(busqueda);

    busqueda = busqueda.toUpperCase();

    let resultado = datos.filter((el) => {
              console.trace(el);
              const nombre = el.Nombre.toUpperCase();
              el.Nombre.contans(busqueda);
              return nombre.includes(busqueda);
    });

    console.trace('----------PIPE TERMINA--------');
    return resultado;
  }//transform

}//AnimalesPipe
