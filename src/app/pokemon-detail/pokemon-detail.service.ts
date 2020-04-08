import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  constructor(private http: HttpClient) { }

  getCard(id): Observable<any[]> {
    return this.http.get<any[]>(`https://api.pokemontcg.io/v1/cards/${id}`);
  }
}
