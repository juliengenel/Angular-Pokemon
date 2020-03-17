import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DetailPokemonComponent} from './detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon.component';
import {PageNotFoundComponent} from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailPokemonComponent,
    ListPokemonComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
