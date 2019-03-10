export interface Games {
  data: Array<Game>;
  success: boolean;
}

export interface Game {
  id?:	string;
  date?:	string;
  team_one_id?:	string;
  team_one_name?:	string;
  team_one_goals?:	number;
  team_two_goals?:	number;
  team_two_id?:	string;
  team_two_name?:	string;
}

export interface GameResult {
  result: Game[];
  success: boolean;
}
