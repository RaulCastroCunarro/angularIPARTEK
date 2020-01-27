import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() {
    console.trace("PokemonService contructor");
  }

  getPokemon(){
    const url="https://pokeapi.co/api/v2/pokemon/1"
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }
}
