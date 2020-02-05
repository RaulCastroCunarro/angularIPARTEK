import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  //Variables
  pokemon: any;
  titulo : string;
  numeroClicks: number;
  title = 'Manual de Angular de DesarrolloWeb.com';
  visible: boolean;
  jugador: string;

  constructor( private pokemonService: PokemonService ) {

    console.trace('InicioComponent constructor');
    this.pokemon = {};
    this.numeroClicks = 0;
    this.visible = false;

  }// constructor

  ngOnInit() {
    console.trace('InicioComponent ngOnInit');

    this.pokemonService.getPokemon('bulbasur').subscribe(
      data => {
        console.debug('petición ok %o' , data);
        this.pokemon = data;
      },
      error => console.warn(error),
      () => {
        console.trace('petición completa');
      }
    );

  }// ngOnInit

  contarClicks(){
    console.trace('contarClicks');
    this.numeroClicks++;
  }//contarClicks

  decirAdios() {
    this.visible = true;
    }//decirAdios
    

}//InicioComponent