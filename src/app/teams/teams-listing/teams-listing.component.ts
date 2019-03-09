import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Team } from 'src/app/interfaces/teams.interface';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams-listing',
  templateUrl: './teams-listing.component.html',
  styleUrls: ['./teams-listing.component.css']
})
export class TeamsListingComponent implements OnInit {
  teams: Team[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.teams = this.route.snapshot.data.data;
  }

  gamesWon(team: Team): number {
    return team.games.filter(game =>
        game.team_one_id === team.id &&
        game.team_one_goals > game.team_two_goals
      ).length;
  }

  gamesLost(team: Team): number {
    return team.games.filter(game =>
        game.team_one_id === team.id &&
        game.team_one_goals < game.team_two_goals
      ).length;
  }

  gamesDrawn(team: Team): number {
    return team.games.filter(game =>
        game.team_one_id === team.id &&
        game.team_one_goals === game.team_two_goals
      ).length;
  }

  totalPoints(team: Team): number {
    return this.gamesWon(team) * 3 + this.gamesDrawn(team);
  }
}
