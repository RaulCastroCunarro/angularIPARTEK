import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  frutas: any;
  total: number;
  nombres: string;

  constructor() {
    console.trace('ArraysComponent constructor');
    this.total = 0;
    this.frutas = [
      {'nombre':'fresa', 'recio': 2.45},
      {'nombre':'pera', 'precio' : 3.5},
      {'nombre':'manzana', 'precio': 1.99}
    ];
    this.frutas.forEach(element => {
      this.total = this.total + element.precio;
      this.nombres = this.nombres + " " + element.nombre;
    });
    
  }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit');
  }

}
