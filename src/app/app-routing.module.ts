import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsListingComponent } from './teams/teams-listing/teams-listing.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    component: TeamsListingComponent
  },
  {
    path: 'teams/:id',
    component: TeamDetailComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
