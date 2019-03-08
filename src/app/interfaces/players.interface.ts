export interface Players {
  success: boolean;
  data: Array<Player>;
}

export interface Player {
    id: string;
    team_id: string;
    name: string;
    age: number;
    nationality: string;
    flag_url: string;
    position: string;
    history: PlayerHistory[];
    value: string;
}

interface PlayerHistory {
  team_id: string;
  apps: number;
  goals: number;
}

export interface PlayersPayload {
  team_id?: string;
  name?:	string;
  age?: number;
  nationality?: string;
  position?: string;
}
