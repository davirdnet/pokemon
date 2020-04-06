import { PokemonListCardComponent } from './pokemon-list/pokemon-list-card/pokemon-list-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonCardDetailComponent } from './pokemon-detail/pokemon-card-detail/pokemon-card-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: PokemonListComponent},
  {path: 'list-card', component: PokemonListCardComponent},
  {path: 'detail', component: PokemonDetailComponent},
  {path: 'card-detail', component: PokemonCardDetailComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
