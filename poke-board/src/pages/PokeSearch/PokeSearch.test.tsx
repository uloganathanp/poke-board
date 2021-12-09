import React from "react";
import { render, screen } from "@testing-library/react";
import { PokeSearch } from "./PokeSearch";

const data = {
  count: 10,
  next: null,
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
    { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
    { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
  ],
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    currentPage: 1,
  }),
  useHistory: () => ({}),
}));

describe("<PokeSearch />", () => {
  beforeEach(() => {
    render(<PokeSearch />);
  });

  it("Search page should have pokemon", () => {
    const name = screen.getAllByText("Search Pokemon");
    expect(name).toBeInTheDocument();
  });
});
