import { Component, OnInit } from '@angular/core';

const SUMAR = "Sumar";
const RESTAR = "Restar";
const ROJO = "danger";
const VERDE = "success";

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  //declarar variables  nombre: tipo
  numero: number;
  incremento : number;
  nombre : string;
  color : string;

  constructor() {
    console.log("Entra en el constructor");
    this.numero = 0;
    this.incremento = 1;
    this.nombre = SUMAR;
    this.color = VERDE;
  }

  ngOnInit() {
    console.log("Entra en el inicio");
  }

  ngOnClick(){
    this.numero += this.incremento;
    if (this.numero == 0){
      this.incremento = 1;
      this.nombre = SUMAR;
      this.color = VERDE;
    }else if (this.numero == 10){
      this.incremento = -1;
      this.nombre = RESTAR;
      this.color = ROJO;
    }
  }

}
