import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamPlayersComponent } from './team-detail/team-players/team-players.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsListingComponent } from './teams-listing/teams-listing.component';
import { GamesComponent } from './team-detail/games/games.component';
import { NewGameComponent } from './team-detail/games/new-game/new-game.component';

@NgModule({
  declarations: [
    TeamsListingComponent,
    TeamDetailComponent,
    TeamPlayersComponent,
    GamesComponent,
    NewGameComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ],
  exports: [
    TeamsListingComponent,
    TeamDetailComponent,
    TeamPlayersComponent,
    GamesComponent,
    NewGameComponent,
  ]
})
export class TeamsModule { }
