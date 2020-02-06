import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  enlaces: Array<any>;

  constructor() {
    this.enlaces = [{
      'nombre': 'Inicio',
      'direccion': '/'
    },
    {
      'nombre': 'Productos',
      'direccion': '/productos'
    },
    {
      'nombre': 'Juego',
      'direccion': '/juego'
    },
    {
      'nombre': 'Arrays',
      'direccion': '/arrays'
    },
    {
      'nombre': 'Productos',
      'direccion': '/productos'
    },
    {
      'nombre': 'Ej. Clase y Rest',
      'direccion': '/pokemon'
    },
    {
      'nombre': 'Estilos',
      'direccion': '/estilos'
    },
    {
      'nombre': 'Directivas',
      'direccion': '/directivas'
    },
    {
      'nombre': 'Filtros',
      'direccion': '/filtros'
    },
    {
      'nombre': 'Recetario',
      'direccion': '/recetario'
    }
  ];
  }

  ngOnInit() {
  }

}
