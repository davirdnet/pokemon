import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  cards: any;
  buscaPokemon;
  @Output() detail = new EventEmitter();

  constructor(
                private pokemonListService: PokemonListService,
                private router: Router
              ) { }

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cards = [];
    this.pokemonListService.getAllCards().subscribe((cards: {}) => {
      this.cards = cards;
    });
  }

  goDetails(id) {
    this.detail.emit(id);
    this.router.navigate([`/detail/${id}`]);
  }

}
