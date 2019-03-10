import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsListingComponent } from './teams-listing/teams-listing.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamResolver } from './team.resolver';

const routes: Routes = [
  {
    path: '',
    component: TeamsListingComponent,
    resolve: { data: TeamResolver }
  },
  {
    path: ':id',
    component: TeamDetailComponent,
    resolve: { data: TeamResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
