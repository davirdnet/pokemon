import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class PokemonListService {

  response: any;

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<any[]> {
    return this.http.get<any[]>('https://api.pokemontcg.io/v1/cards?page=1&pageSize=10');
  }
}
