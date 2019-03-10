import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/interfaces/games.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  @Input() games: Game[];
}
