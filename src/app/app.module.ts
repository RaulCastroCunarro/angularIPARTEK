import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosSASSComponent } from './paginas/estilos-sass/estilos-sass.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { HelloDirective } from './directives/hello.directive';
import { SubrayarDirective } from './directives/subrayar.directive';
import { AnimalesPipe } from './pipes/animales.pipe';
import { RecetarioComponent } from './paginas/recetario/recetario.component';
import { RecetaPipe } from './pipes/receta.pipe';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { TareasComponent } from './paginas/tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    BotonComponent,
    NavbarComponent,
    InicioComponent,
    ProductosComponent,
    JuegoComponent,
    ArraysComponent,
    PokemonRestComponent,
    EstilosSASSComponent,
    DirectivasComponent,
    FiltrosComponent,
    HelloDirective,
    SubrayarDirective,
    AnimalesPipe,
    RecetarioComponent,
    RecetaPipe,
    Error404Component,
    SaludarComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Modulo para llamadas por HTTP
    AppRoutingModule,
    FormsModule       //Modulo para usar Formularios.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }