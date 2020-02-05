import { Component, OnInit } from '@angular/core';

const TIEMPO_JUEGO = 5000;

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  //Variables
  puntos: number;
  visible: boolean;
  ranking: Map<string,number>;
  jugador : string;

  constructor() {
    console.trace('JuegoComponent constructor');
    this.puntos = 0;
    this.visible = false;
    this.ranking = new Map();
  }

  ngOnInit() {
    console.trace('onInit');
  }//ngOnInit

  contarPuntos() {
    console.trace('contarClicks');
    this.puntos++;
  }//contarClicks

  mostrarClicker() {
    this.visible = true;
    this.contador();
  }//mostrarClicker


  contador() {
    console.log('contador');
    setTimeout(() => {
      console.log('Timeout');
      this.addRanking(this.jugador, this.puntos);
      this.visible = false;
      this.puntos = 0;
      this.jugador = '';
    }, TIEMPO_JUEGO);
  }//contador

  addRanking(nombre: string, puntos: number) {
    this.ranking.set(nombre, puntos);
  }//addRanking
}//JuegoComponent
