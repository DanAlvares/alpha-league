import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Players, Player } from 'src/app/interfaces/players.interface';

@Component({
  templateUrl: './players-listing.component.html',
  styleUrls: ['./players-listing.component.css']
})
export class PlayersComponent implements OnInit {
  public players: Player[];
  public playersList: Player[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.players = this.route.snapshot.data.data.data;
    this.playersList = this.players;
  }

  filterPlayers(event): void {
    this.playersList = this.players.filter(player =>
      Object.values(player).toString().toLowerCase().indexOf(event.target.value.toLowerCase().trim()) !== -1);
  }
}
