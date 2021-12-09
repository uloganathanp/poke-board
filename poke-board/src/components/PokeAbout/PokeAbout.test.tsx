import React from "react";
import { render, screen } from "@testing-library/react";
import { PokeAbout } from "./PokeAbout";
import { Pokemon } from "../../types/Pokemon";
import { getFullPokemon } from "../../test-util/testData";

describe("<PokeAbout />", () => {
  const fullPokemon: Pokemon = getFullPokemon();

  beforeEach(() => {
    render(<PokeAbout pokemon={fullPokemon} />);
  });

  it("check base happiness in screen", () => {
    const baseHappiness = screen.getByText(fullPokemon.base_happiness);
    expect(baseHappiness).toBeInTheDocument();
  });

  it("check capture rate in screen", () => {
    const captureRate = screen.getByText(fullPokemon.capture_rate);
    expect(captureRate).toBeInTheDocument();
  });

  it("check growth rate in screen", () => {
    const growthRate = screen.getByText(fullPokemon.growth_rate);
    expect(growthRate).toBeInTheDocument();
  });

  it("check shape in screen", () => {
    const shape = screen.getByText(fullPokemon.shape);
    expect(shape).toBeInTheDocument();
  });

  it("check gender difference in screen", () => {
    let genderText = fullPokemon.has_gender_differences ? "Yes" : "No";
    const genderDiff = screen.getByText(genderText);
    expect(genderDiff).toBeInTheDocument();
  });

  it("check hatch counter in screen", () => {
    const hatchCounter = screen.getByText(fullPokemon.hatch_counter);
    expect(hatchCounter).toBeInTheDocument();
  });

  it("check egg count", () => {
    const eggCount = fullPokemon.egg_groups.length;
    const aboutComponent = render(<PokeAbout pokemon={fullPokemon} />);
    expect(
      aboutComponent.container.getElementsByClassName("badge").length
    ).toBe(eggCount);
  });
});
