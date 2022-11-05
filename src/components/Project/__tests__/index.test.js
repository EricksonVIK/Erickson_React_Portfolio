import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Project from "../index.project";

afterEach(cleanup);

describe("Project component", () => {
  // baseline test
  it("renders", () => {
    render(<Project />);
  });
  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Project />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});
