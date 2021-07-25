import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

// Injectable decorator is inherently associated with our SERVICES
// Since we expect to inject services into components to give them functionality
@Injectable({
  providedIn: 'root'
})

// Remember, the Services are what give functionality to our models/components
export class PokemonService {

  // We need to dependency inject HttpClient in order to use it in an HTTP request
  constructor(private http:HttpClient) { }

  // this method is what will get our Pokemon data from the api, to turn into a Pokemon object
  // Note - we use a GET request to get pokemon data, and return it as an Observable
    // Note note- we use Observables to hold data from a server.Like a promise but better
  getPokemonFromApi(id:number):Observable<Pokemon>{ // this function returns an observable of type pokemon
    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + id + "/") as Observable<Pokemon>
  } 
// This ^^^ is basically an easier, more powerful way to do fetch()
// We just have to make sure to inject this service into the constructors of components/models
    // so we can actually use it

}
