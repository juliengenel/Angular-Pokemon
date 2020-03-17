import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { OnInit } from '@angular/core';
import {POKEMONS} from './mock-pokemons';
import { Router} from '@angular/router';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./app.component.scss']
})
export class ListPokemonComponent implements OnInit {

  constructor(private router: Router) {
  }

  pokemons: Pokemon[];


  ngOnInit() {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }

}
