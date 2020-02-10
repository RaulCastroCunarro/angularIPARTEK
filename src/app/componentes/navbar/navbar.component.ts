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
      'direccion': '/',
      'icono': 'fas fa-home'
    },
    {
      'nombre': 'Productos',
      'direccion': '/productos',
      'icono': 'fas fa-shopping-basket'
    },
    {
      'nombre': 'Juego',
      'direccion': '/juego',
      'icono': 'fas fa-dice'
    },
    {
      'nombre': 'Arrays',
      'direccion': '/arrays',
      'icono': 'fas fa-layer-group'
    },
    {
      'nombre': 'Ej. Clase y Rest',
      'direccion': '/pokemon',
      'icono': 'fas fa-bullseye'
    },
    {
      'nombre': 'Estilos',
      'direccion': '/estilos',
      'icono': 'fas fa-swatchbook'
    },
    {
      'nombre': 'Directivas',
      'direccion': '/directivas',
      'icono': 'fas fa-compass'
    },
    {
      'nombre': 'Filtros',
      'direccion': '/filtros',
      'icono': 'fas fa-filter'
    },
    {
      'nombre': 'Recetario',
      'direccion': '/recetario',
      'icono': 'far fa-edit'
    },
    {
      'nombre': 'Error 404',
      'direccion': '/error404',
      'icono': 'fas fa-exclamation-circle'
    },
    {
      'nombre': 'Saludar',
      'direccion': '/Saludar',
      'icono': 'far fa-handshake'
    },
    {
      'nombre': 'Tareas',
      'direccion': '/tareas',
      'icono': 'fas fa-tasks'
    }
  ];
  }

  ngOnInit() {
  }

}
