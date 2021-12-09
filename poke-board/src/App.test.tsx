import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing app bootstraping", () => {
  render(<App />);
});
