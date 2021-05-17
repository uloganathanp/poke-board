import React from "react";
import { BasicPokemon } from "../../types/BasicPokemon";

/**
 * Pokemon card view
 * @param props
 * @returns
 */
export function PokeCard(props: { pokemon: BasicPokemon; clickHandler: any }) {
  const urlEle = props.pokemon.url.split("/");
  //Pokemon Id from URL
  const pokeIndex = urlEle[urlEle.length - 2];
  //Pokemon image source
  const pokeImageSrc =
    "https://pokeres.bastionbot.org/images/pokemon/" + pokeIndex + ".png";
  return (
    <div
      className={"card poke-card card-bg" + (parseInt(pokeIndex) % 24)}
      onClick={() => props.clickHandler(pokeIndex)}
    >
      <div className="text-muted">
        <em className="poke-num">#{pokeIndex}</em>
      </div>
      <img src={pokeImageSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title pokeText text-center">
          {props.pokemon.name}
        </h5>
      </div>
    </div>
  );
}
