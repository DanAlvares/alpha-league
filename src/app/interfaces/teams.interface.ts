export interface Teams extends Array<Team> {}

export interface Team {
    id: string;
    name: string;
    city: string;
    logo_url: string;
    founded: string;
    colour: string;
    budget: string;
}

export interface TeamsPayload {
  team_id: string;
  name:	string;
  city:	string;
  logo_url:	string;
  founded:	string;
  colour:	string;
  budget:	number;
}
