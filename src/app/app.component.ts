import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { OnInit } from '@angular/core';
import {POKEMONS} from './mock-pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   pokemons: Pokemon[];
   title: string = "Pokemons";
   value: string ="";

  ngOnInit() {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) {
    console.log("Vous avez cliquer sur " + pokemon.name);
  }
  
}
