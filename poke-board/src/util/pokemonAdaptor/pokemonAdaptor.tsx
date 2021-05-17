import { FullPokemon } from "../../types/FullPokemon";
import { Stat } from "../../types/Stat";

/**
 * Construct pokemon object using info and species data
 * @param pokemonInfo
 * @param pokemonSpecies
 * @returns
 */
export function pokemonAdaptor(pokemonInfo: any, pokemonSpecies: any) {
  const pokemon = new FullPokemon();
  pokemon.name = pokemonInfo.name;
  pokemon.id = pokemonInfo.id;
  pokemon.base_happiness = pokemonSpecies.base_happiness;
  pokemon.capture_rate = pokemonSpecies.capture_rate;
  pokemon.color = pokemonSpecies.color.name;
  pokemon.base_experience = pokemonInfo.base_experience;
  pokemon.numMoves = pokemonInfo.moves.length;
  pokemon.description = pokemonSpecies.flavor_text_entries[0].flavor_text;
  pokemon.growth_rate = pokemonSpecies.growth_rate.name;
  pokemon.habitat = pokemonSpecies.habitat.name;
  pokemon.has_gender_differences = pokemonSpecies.has_gender_differences;
  pokemon.hatch_counter = pokemonSpecies.hatch_counter;
  pokemon.shape = pokemonSpecies.shape.name;

  for (let i = 0; i < pokemonInfo.abilities.length; i++) {
    pokemon.ability.push(pokemonInfo.abilities[i].ability.name);
  }

  for (let i = 0; i < pokemonInfo.stats.length; i++) {
    const stat: Stat = { name: "", value: 0 };
    stat.name = pokemonInfo.stats[i].stat.name;
    stat.value = pokemonInfo.stats[i].base_stat;
    pokemon.stat.push(stat);
  }

  for (let i = 0; i < pokemonSpecies.egg_groups.length; i++) {
    pokemon.egg_groups.push(pokemonSpecies.egg_groups[i].name);
  }

  for (let i = 0; i < pokemonInfo.types.length; i++) {
    pokemon.types.push(pokemonInfo.types[i].type.name);
  }

  return pokemon;
}
