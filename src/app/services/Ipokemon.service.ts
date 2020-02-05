import { Observable } from "rxjs";

export interface IPokemonService {

    /**
     * Recuperamos los datos en JSON de todos los Pokemon
     */
    getAll();

    /**
     * Recuperamos los datos en JSON de un Pokemon por su id
     * @param nombre: number id del pokemon a buscar
     */
    getById( idPokemon: number );

    /**
     * Recuperamos los datos en JSON de un Pokemon por su nombre
     * @param nombre: stringnombre del pokemon a buscar
     * @see GET /api/v2/pokemon/{nombre}
     */
    getByName( nombre: string );

    /**
     * Recupera un json con las caracteristicas de un Pokemon por su de id
     * @param id: number identificador del Pokemon
     * * @see GET /api/v2/pokemon/caracteristicas/{id}
     */
    getHabilidad(nombreHabilidad: string): Observable<any>;
}