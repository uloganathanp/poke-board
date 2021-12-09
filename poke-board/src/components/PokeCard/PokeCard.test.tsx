import React from "react";
import { render, screen } from "@testing-library/react";

import { BasicPokemon } from "../../types/BasicPokemon";
import { PokeCard } from "./PokeCard";

describe("<PokeCard />", () => {
  const basicPokemon: BasicPokemon = {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  };

  beforeEach(() => {
    render(<PokeCard pokemon={basicPokemon} clickHandler={() => {}} />);
  });

  it("Card should have name", () => {
    const name = screen.getByText(basicPokemon.name);
    expect(name).toBeInTheDocument();
  });
});
