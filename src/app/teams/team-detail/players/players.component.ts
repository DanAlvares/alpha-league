import { Component, Input } from '@angular/core';
import { Player } from 'src/app/interfaces/players.interface';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  @Input() players: Player[];

}
