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

  private pokemons: Pokemon[];

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

}
