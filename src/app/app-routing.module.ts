import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPokemonComponent} from './list-pokemon.component';
import {DetailPokemonComponent} from './detail-pokemon.component';
import {PageNotFoundComponent} from './page-not-found.component';


const routes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent},
  { path: 'pokemons/:id', component: DetailPokemonComponent},
  { path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
