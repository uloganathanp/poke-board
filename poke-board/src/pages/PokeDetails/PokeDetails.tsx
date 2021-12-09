import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../../types/Pokemon";
import { pokemonAdaptor } from "../../util/pokemonAdaptor/pokemonAdaptor";
import Chip from "@mui/material/Chip";
import { dataFetch } from "../../util/dataFetch/dataFetch";
import { PokeAbout } from "../../components/PokeAbout/PokeAbout";
import { PokeStat } from "../../components/PokeStat/PokeStat";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

/**
 * Page to desplay selected pokemon details
 * @returns
 */
export function PokeDetails() {
  console.log(process.env);
  //Selected Pokemon Id
  let { pokeId } = useParams<{ pokeId: string }>();
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
    const pokemonUrl = `${process.env.REACT_APP_API_URL}pokemon/${pokeId}`;
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
    const pokemonSpUrl = `${process.env.REACT_APP_API_URL}pokemon-species/${pokeId}`;
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

  const navigatePokemon = (pokeNum: string, forward: boolean) => {
    setPokemon(null);
    setPokemonInfo(null);
    setPokemonSpecies(null);
    const targetId = forward ? parseInt(pokeNum) + 1 : parseInt(pokeNum) - 1;
    pokeId = targetId.toString();
    history.push(`/pokemon/${targetId}`);
  };

  useEffect(() => {
    getPokemonInfo();
    getPokemonSpecies();
  }, [pokeId]);

  if (pokemonInfo && pokemonSpecies && !pokemon) {
    //Create Pokemon object using pokemonAdaptor
    const poke = pokemonAdaptor(pokemonInfo, pokemonSpecies);
    setPokemon(poke);
  }

  return (
    <>
      {pokemon && pokeId ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 text-center">
              <Button
                variant="contained"
                component="span"
                onClick={() => navigatePokemon(pokeId, false)}
                disabled={parseInt(pokeId) === 1}
              >
                Previous
              </Button>
            </div>
            <div className="col-8">
              <div
                className={
                  "row justify-content-center poke-bg " + pokemon.color
                }
              >
                <div className="col-6 text-center">
                  <h5 className="pokeText text-white">{pokemon.name}</h5>
                  <h5 className="text-white">#{pokemon.id}</h5>
                  <img
                    src={`${process.env.REACT_APP_IMAGE_URL}${pokemon.id}.png`}
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
            <div className="col-2 text-center">
              <Button
                variant="contained"
                component="span"
                onClick={() => navigatePokemon(pokeId, true)}
                disabled={parseInt(pokeId) === 1124}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}
