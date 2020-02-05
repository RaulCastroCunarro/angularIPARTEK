import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPokemonService } from './Ipokemon.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService {

  getHabilidad(nombreHabilidad: string): Observable<any> {
    console.debug('Entra en getHabilidad')
    const url = `https://pokeapi.co/api/v2/ability/${nombreHabilidad}/`;
    return this.http.get(url);
  }

  constructor( private http: HttpClient ) {
     console.trace('PokemonService constructor');
  }


  getPokemon( nombre: string ): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }

  getAll() {
    throw new Error("Method not implemented.");
  }
  getById( id: number ) {
    throw new Error("Method not implemented.");
  }

  getByName( nombre: string) {
    throw new Error("Method not implemented.");
  }


}