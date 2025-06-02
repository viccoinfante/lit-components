import { LitElement, html, css, type CSSResultGroup } from "lit";
import { customElement, property, state } from "lit/decorators.js";

export interface IPokemonResponse {
  name?: string
  url?: string
}
export interface IInfoPokemon {
  count?: number
  next?: string
  previous?: any
  results?: IPokemonResponse[]
}

@customElement("my-body")
export class MyElement extends LitElement {
  @state()
  pokemonResponse: IInfoPokemon | undefined;

  getInfo = () => {
    fetch("https://pokeapi.co/api/v2/pokemon", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result: IInfoPokemon) => {
        this.pokemonResponse = result;
        if (this.pokemonResponse && this.pokemonResponse.results) {
          this.pokemonResponse.results.forEach(pokemon => {
            console.log(pokemon.name);
          });
        }
      });
  };

  constructor() {
    super();
    this.getInfo();
  }
  

   render() {
    return html`
    
      ${this.pokemonResponse && this.pokemonResponse.results ?
        html`
            ${this.pokemonResponse.results.map(pokemon =>
              html`
              <div class= "rejilla">
              <div class = "pokemones">
              <img src="https://img.pokemondb.net/sprites/x-y/normal/${pokemon.name}.png" alt="${pokemon.name}">
              <a href=https://www.wikidex.net/wiki/${pokemon.name}>${pokemon.name}</a>
              </div>
              `
            )} 
        ` :
        html``
      }
    `;
  }
   static styles = css `
     :host {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between; 
     }
   
   .pokemones {
        display: flex;
        justify-content: center; 
        border-radius: 15px;
        border: 1px solid #000;
        margin: 20px;
        border-color: white;
        text-shadow: 1px 1px 1px rgba(32,32,32,0.3);
        box-shadow: 1px 1px 1px 1px rgba(32,32,32,0.3);
        width: 250px;
        background-color: white;
      }
    

      h2 {
       color: rgb(0, 0, 0);
        text-shadow: 1px 1px 1px rgba(32,32,32,0.3);  
      }

      a {
        color: white;
        text-decoration: none;
        font-size: 1.1em;
        transition: color 0.3s ease-in-out;
         color: rgb(0, 0, 0);
      }
      
      a:hover {
      color:rgb(24, 224, 208);
      }
   `;
}