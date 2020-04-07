import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonCardDetailComponent } from './pokemon-detail/pokemon-card-detail/pokemon-card-detail.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonListService } from './pokemon-list/pokemon-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonCardDetailComponent,
    PokemonListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokemonListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
