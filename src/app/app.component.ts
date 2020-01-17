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
      "imagen": "https://as.com/deporteyvida/imagenes/2018/06/19/portada/1529402043_039778_1529402207_noticia_normal.jpg",
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
      "gluten": true,
      "precio": 1.50,
      "imagen": "https://t2.rg.ltmcdn.com/es/images/6/2/9/img_galletas_con_chispas_de_chocolate_caseras_35926_600.jpg",
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
      "imagen": "https://embutidosasalgueira.es/wp-content/uploads/2017/02/Chorizo-extra-a-salgueira.jpg",
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
