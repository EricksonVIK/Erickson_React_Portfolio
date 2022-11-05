import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Resume from "../index.resume";

afterEach(cleanup);

describe("Resume component", () => {
  // baseline test
  it("renders", () => {
    render(<Resume />);
  });
  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Resume />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});
