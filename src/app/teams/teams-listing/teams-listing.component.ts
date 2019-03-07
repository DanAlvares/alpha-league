import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Teams, Team } from 'src/app/interfaces/teams.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-teams-listing',
  templateUrl: './teams-listing.component.html',
  styleUrls: ['./teams-listing.component.css']
})
export class TeamsListingComponent implements OnInit {
  teams: Team[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.apiService.getTeams({})
      .pipe(map(res => res.data))
      .subscribe((teams: Team[]) => {
        this.teams = teams;
      });
  }
}
