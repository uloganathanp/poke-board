import { Stat } from "./Stat";

export interface Pokemon {
  name: string;
  id: number;
  base_happiness: number;
  capture_rate: number;
  color: string;
  ability: Array<string>;
  base_experience: number;
  numMoves: number;
  stat: Array<Stat>;
  egg_groups: Array<string>;
  description: string;
  types: Array<string>;
  growth_rate: string;
  habitat: string;
  has_gender_differences: boolean;
  hatch_counter: number;
  shape: string;
}
