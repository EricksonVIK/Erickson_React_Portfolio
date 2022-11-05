// cleanup -- removes components
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import compnent to be tested
import Footer from "../index.footer";

// ensures no leftover memory to clash
afterEach(cleanup);

describe("Footer component", () => {
  // First Test
  it("renders", () => {
    render(<Footer />);
  });
  // Second Test
  it("matches snapshot DOM node structure", () => {
      const { asFragment } = render(<Footer />);
      expect(asFragment()).toMatchSnapshot();
  });
});