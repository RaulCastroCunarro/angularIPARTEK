import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesTipoFiltro'
})
export class AnimalesTipoPipe implements PipeTransform {

  transform(datos: any): any {
    console.trace('----------PIPE EMPIEZA--------');
    console.trace(datos);
    
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

}
