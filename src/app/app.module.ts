import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListService } from './pokemon-list/pokemon-list.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [PokemonListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
