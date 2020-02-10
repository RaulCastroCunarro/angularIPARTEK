import { Component, OnInit } from '@angular/core';
import { RECETARIO } from '../../recetario';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  recetas: Array<any>;
  rSeleccionado: any;
  busqueda: string;

  constructor() {
    console.trace('RecetarioComponent constructor');
    this.recetas = RECETARIO;
    this.rSeleccionado = this.recetas[0];
    this.busqueda = "";
  }// constructor

  ngOnInit() {
    console.trace('RecetarioComponent ngOnInit');
  }// ngOnInit

  selecionarReceta = function( receta ) {
    console.debug('hemos hecho click %o ', receta );
    this.rSeleccionado = receta;
  }//selecionarReceta

}
