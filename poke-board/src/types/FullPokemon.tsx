import { Pokemon } from "./Pokemon";
import { Stat } from "./Stat";

export class FullPokemon implements Pokemon {
  name: string = "";
  id: number = -1;
  base_happiness: number = 0;
  capture_rate: number = 0;
  color: string = "";
  ability: string[] = [];
  base_experience: number = 0;
  numMoves: number = 0;
  stat: Stat[] = [];
  egg_groups: string[] = [];
  description: string = "";
  types: string[] = [];
  growth_rate: string = "";
  habitat: string = "";
  has_gender_differences: boolean = false;
  hatch_counter: number = 0;
  shape: string = "";
}
