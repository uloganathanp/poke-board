import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../../types/Pokemon";
import { pokemonAdaptor } from "../../util/pokemonAdaptor/pokemonAdaptor";
import Chip from "@mui/material/Chip";
import { dataFetch } from "../../util/dataFetch/dataFetch";
import { PokeAbout } from "../../components/PokeAbout/PokeAbout";
import { PokeStat } from "../../components/PokeStat/PokeStat";
import { useHistory } from "react-router-dom";

/**
 * Page to desplay selected pokemon details
 * @returns
 */
export function PokeDetails() {
  //Selected Pokemon Id
  const { pokeId } = useParams<{ pokeId?: string }>();
  //Pokemon info contains stats
  const [pokemonInfo, setPokemonInfo] = useState<any>(null);
  //Pokemon species details
  const [pokemonSpecies, setPokemonSpecies] = useState<any>(null);
  //Pokemon Object which contains selected properties with simple form
  const [pokemon, setPokemon] = useState<Pokemon | any>(null);
  //Browser history
  const history = useHistory();

  /**
   * Fetch Poekmon info from PokeApi
   */
  const getPokemonInfo = () => {
    const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/" + pokeId; // ToDo: Move Url to property file
    dataFetch(pokemonUrl)
      .then((data) => {
        if (data) {
          setPokemonInfo(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Fetch Pokemon Species details from PokeApi
   */
  const getPokemonSpecies = () => {
    const pokemonSpUrl = "https://pokeapi.co/api/v2/pokemon-species/" + pokeId;
    dataFetch(pokemonSpUrl)
      .then((data) => {
        if (data) {
          setPokemonSpecies(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPokemonInfo();
  }, []);

  useEffect(() => {
    getPokemonSpecies();
  }, []);

  if (pokemonInfo && pokemonSpecies && !pokemon) {
    //Create Pokemon object using pokemonAdaptor
    const poke = pokemonAdaptor(pokemonInfo, pokemonSpecies);
    setPokemon(poke);
  }

  return (
    <>
      {pokemon ? (
        <div className="container">
          <div
            className={"row justify-content-center poke-bg " + pokemon.color}
          >
            <div className="col-6 text-center">
              <h5 className="pokeText text-white">{pokemon.name}</h5>
              <h5 className="text-white">#{pokemon.id}</h5>
              <img
                src={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
                  pokemon.id +
                  ".png"
                }
                alt={pokemon.name}
              />
            </div>
          </div>
          <div className="row pokeBody justify-content-center">
            <div className="col-12 topMargin-1x">
              <p className="topMargin-1x">{pokemon.description}</p>
              {pokemon.types.map((pokeType: string) => (
                <Chip
                  className={pokeType}
                  label={pokeType}
                  style={{ marginRight: "1em", color: "white" }}
                />
              ))}
            </div>
            <div className="col-6 topMargin-1x">
              <PokeAbout pokemon={pokemon} />
            </div>
            <div className="col-6 topMargin-1x">
              <PokeStat pokemon={pokemon} />
            </div>
            <div className="col-12 text-center topMargin-1x">
              <a
                className="btn btn-info topMargin-1x"
                style={{ marginBottom: "1em" }}
                onClick={history.goBack}
              >
                Back
              </a>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}
