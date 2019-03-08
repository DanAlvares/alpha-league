import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsListingComponent } from './teams/teams-listing/teams-listing.component';
import { HeaderComponent } from './core/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { PlayersComponent } from './teams/team-detail/players/players.component';
import { GamesComponent } from './teams/team-detail/games/games.component';
import { NewGameComponent } from './teams/team-detail/games/new-game/new-game.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsListingComponent,
    HeaderComponent,
    TeamDetailComponent,
    PlayersComponent,
    GamesComponent,
    NewGameComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
