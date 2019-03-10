import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerResolver } from '../teams/player.resolver';
import { PlayersComponent } from './players-listing/players-listing.component';

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent,
    resolve: { data: PlayerResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
