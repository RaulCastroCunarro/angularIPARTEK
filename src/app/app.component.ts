import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular App';
  login = 'login';

  productos = [
    {
      "id": 34,
      "nombre": "Cafe",
      "glutten": false,
      "precio": 1.46,
      "categoria": {
        "id": 1,
        "nombre": "Bebidas"
      },
      "historico": [{
          "fecha": "17/01/2020",
          "precio": 1.45
        },
        {
          "fecha": "25/11/2019",
          "precio": 1.20
        }
      ]
    },
    {
      "id": 35,
      "nombre": "Galletas",
      "glutten": true,
      "precio": 1.50,
      "categoria": {
        "id": 2,
        "nombre": "Pastelería"
      },
      "historico": [{
          "fecha": "17/01/2020",
          "precio": 1.49
        },
        {
          "fecha": "25/11/2019",
          "precio": 1.46
        }
      ]
    },
    {
      "id": 36,
      "nombre": "Chorizo",
      "glutten": false,
      "precio": 2.16,
      "categoria": {
        "id": 3,
        "nombre": "Charcutería"
      },
      "historico": [{
          "fecha": "17/01/2020",
          "precio": 2.06
        },
        {
          "fecha": "25/11/2019",
          "precio": 2.10
        }
      ]
    }
  ]

  pSeleccionado = this.productos[0];

  seleccionarProducto = function(producto){
    console.log('hemos hecho click');
    this.pSeleccionado = producto;
  }
}
