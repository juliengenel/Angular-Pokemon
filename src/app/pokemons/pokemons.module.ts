import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import {PokemonRoutingModule} from './pokemon-routing.module';
import {PokemonsService} from './pokemon.service';
import {PokemonFormComponent} from './pokemon-form.component';
import {FormsModule} from '@angular/forms';
import {EditPokemonComponent} from './edit-pokemon.component';


@NgModule({
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule
  ],
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  providers: [PokemonsService]
})
export class PokemonsModule { }
