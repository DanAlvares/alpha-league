import { Component, Input } from '@angular/core';
import { Player } from 'src/app/interfaces/players.interface';

@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.css']
})
export class TeamPlayersComponent {
  @Input() players: Player[];

}
