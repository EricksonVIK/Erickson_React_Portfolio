import React from "react";
// render -- renders components
// cleanup -- removes components
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import compnent to be tested
import About from "../index.about";

// ensures no leftover memory to clash
afterEach(cleanup);

describe("About component", () => {
  // First Test
  it("renders", () => {
    render(<About />);
  });
  // Second Test
  it("matches snapshot DOM node structure", () => {
      const { asFragment } = render(<About />);
      expect(asFragment()).toMatchSnapshot();
  });
});
