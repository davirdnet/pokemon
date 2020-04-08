import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonDetailService } from './pokemon-detail.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  id;
  public pokemon;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pokemonDetailService: PokemonDetailService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id);
    console.log('id ', this.id);
    this.getCard(this.id);
  }

  getCard(id) {
    this.pokemonDetailService.getCard(id).subscribe(response => {
      this.pokemon = response;
    });
    console.log('detail ', this.pokemon);
  }

  goBackList() {
    this.router.navigate(['/list']);
  }

}
