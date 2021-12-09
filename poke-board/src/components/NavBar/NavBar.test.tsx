import React from "react";
import { render, screen } from "@testing-library/react";
import { NavBar } from "./NavBar";

describe("<NavBar />", () => {
  test("NavBar logo present", () => {
    render(<NavBar />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage).toBeInTheDocument();
  });
});
