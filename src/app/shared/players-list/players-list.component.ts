import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/players.interface';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent {
  @Input() players: Player[];
  @Input() hide = '';

  hideColumn(column): boolean {
    const columnsToHide = this.hide.split(',');
    return columnsToHide.indexOf(column) !== -1;
  }
}
