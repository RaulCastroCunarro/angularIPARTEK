import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './paginas/productos/productos.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosSASSComponent } from './paginas/estilos-sass/estilos-sass.component';

/**
 * Definir las rutas la app de angular
 * El path debe coincidir con [routerLink] del componente navbar
 */
const routes: Routes = [
  { path: '',  component: InicioComponent},
  { path: 'productos', component: ProductosComponent },
  { path: 'juego', component: JuegoComponent },
  { path: 'pokemon', component: PokemonRestComponent },
  { path: 'arrays', component: ArraysComponent},
  { path: 'estilos', component: EstilosSASSComponent},
  { path: 'directivas', component: ArraysComponent},
  { path: 'filtros', component: ArraysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }