import { Pokemon } from "../types/Pokemon";

export function getFullPokemon() {
  const pokemon: Pokemon = {
    name: "bulbasaur",
    id: 1,
    base_happiness: 70,
    capture_rate: 45,
    color: "green",
    ability: ["overgrow", "chlorophyll"],
    base_experience: 64,
    numMoves: 78,
    stat: [
      { name: "hp", value: 45 },
      { name: "attack", value: 49 },
      { name: "defense", value: 49 },
      { name: "special-attack", value: 65 },
      { name: "special-defense", value: 65 },
      { name: "speed", value: 45 },
    ],
    egg_groups: ["monster", "plant"],
    description:
      "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
    types: ["grass", "poison"],
    growth_rate: "medium-slow",
    habitat: "grassland",
    has_gender_differences: false,
    hatch_counter: 20,
    shape: "quadruped",
  };
  return pokemon;
}
