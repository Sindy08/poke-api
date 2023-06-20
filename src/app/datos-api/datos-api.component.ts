import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pokemon {
  name: string;
  url: string;
}

@Component({
  selector: 'app-datos-api',
  templateUrl: './datos-api.component.html',
  styleUrls: ['./datos-api.component.scss']
})
export class DatosApiComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  selectedPokemon: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1000').subscribe((response) => {
      this.pokemonList = response.results;
      console.log('datos', this.pokemonList);
      
    }, (error) => {
      console.log(error);
    });
  }
  getPokemonDetails(url: string) {
    this.http.get<any>(url)
      .subscribe(response => {
        this.selectedPokemon = response;
        console.log('pokemon selecionado', this.selectedPokemon.sprites.other);
        
      });
  }
}

