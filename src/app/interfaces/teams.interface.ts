import { Game } from './games.interface';
import { Player } from './players.interface';

export interface Teams {
  data: Array<Team>;
  success: boolean;
}

export interface Team {
    id: string;
    name: string;
    city: string;
    logo_url: string;
    founded: string;
    colour: string;
    budget: string;
    games: Game[];
    players: Player[];
}

export interface TeamsPayload {
  team_id?: string;
  name?:	string;
  city?:	string;
  logo_url?:	string;
  founded?:	string;
  colour?:	string;
  budget?:	number;
}
