import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PokemonsService} from './pokemon.service';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['../app.component.scss'],
})
export class ListPokemonComponent implements OnInit {

  constructor(private router: Router, private pokemonsService: PokemonsService) {
  }

  pokemons: Pokemon[];


  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe(pokemons => this.pokemons = pokemons)
  }
  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
