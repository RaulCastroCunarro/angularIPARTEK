import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { BotonComponent } from './componentes/boton/boton.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
