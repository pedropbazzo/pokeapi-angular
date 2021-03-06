import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { PokeapiClientService } from './pokeapi-client.service';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonListItemComponent,
    HeaderComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: GalleryComponent
      },
      {
        path: 'pokemon/:pokemonId',
        component: PokemonComponent
      }
    ])
  ],
  providers: [PokeapiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
