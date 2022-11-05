// cleanup -- removes components
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import compnent to be tested
import Contact from "../index.contact";

// ensures no leftover memory to clash
afterEach(cleanup);

describe("Contactu component", () => {
  // First Test
  it("renders", () => {
    render(<Contact />);
  });
  // Second Test
  it("matches snapshot DOM node structure", () => {
      const { asFragment } = render(<Contact />);
      expect(asFragment()).toMatchSnapshot();
  });
});