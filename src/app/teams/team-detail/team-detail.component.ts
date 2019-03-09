import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/interfaces/teams.interface';
import { ApiService } from 'src/app/api/api.service';
import { map } from 'rxjs/operators';
import { Player } from 'src/app/interfaces/players.interface';
import { Game } from 'src/app/interfaces/games.interface';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  public team: Team;
  public games: Game[];
  public players: Player[];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const teamId = this.route.snapshot.params.id;
    const teams = this.route.snapshot.data.data;
    this.team = teams.filter(team => teamId === team.id)[0];
  }
}
