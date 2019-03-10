import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerResolver } from './teams/player.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    loadChildren: './teams/teams.module#TeamsModule'
  },
  {
    path: 'players',
    loadChildren: './players/players.module#PlayersModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
