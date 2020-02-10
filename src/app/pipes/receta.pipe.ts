import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetaPipe'
})
export class RecetaPipe implements PipeTransform {

  transform(recetas: any, gluten: boolean, busqueda: string): any {

    let resultado = recetas;

    if (gluten){
      resultado = resultado.filter((el) => el.isGlutenFree);
    }

    if (busqueda && '' !== busqueda){

      resultado = resultado.filter( (el) => {
        const ingredientes = el.ingredientes.reduce((c,p) => c+p, '');
        const encontrar = (el.nombre + el.cocinero + ingredientes).toLowerCase();
        return encontrar.includes(busqueda);
      })
    }
    
    return resultado;
  }//transform

}//RecetaPipe
