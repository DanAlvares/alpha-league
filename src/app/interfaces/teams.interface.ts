import { Game } from './games.interface';

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
