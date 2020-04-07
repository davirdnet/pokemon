import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  cards: any;

  constructor(private pokemonListService: PokemonListService) { }

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cards = [];
    this.pokemonListService.getAllCards().subscribe((cards: {}) => {
      this.cards = cards;
      console.log(this.cards.cards);
    });
  }

}
