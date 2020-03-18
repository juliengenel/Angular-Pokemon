import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import {PokemonRoutingModule} from './pokemon-routing.module';
import {PokemonsService} from './pokemon.service';


@NgModule({
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
  ],
  providers: [PokemonsService]
})
export class PokemonsModule { }
