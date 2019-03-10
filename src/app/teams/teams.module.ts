import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsListingComponent } from './teams-listing/teams-listing.component';
import { GamesComponent } from './team-detail/games/games.component';
import { NewGameComponent } from './team-detail/games/new-game/new-game.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TeamsListingComponent,
    TeamDetailComponent,
    GamesComponent,
    NewGameComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeamsRoutingModule,
    SharedModule,
  ],
  exports: [
    TeamsListingComponent,
    TeamDetailComponent,
    GamesComponent,
    NewGameComponent,
  ]
})
export class TeamsModule { }
