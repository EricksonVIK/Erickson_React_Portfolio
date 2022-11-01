import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { pages, pageSelected, setPageSelected, currentPage, setCurrentPage } =
    props;
  // jsx
  return (
    <header>
      <h1>
        <a href="#" onClick={() => setCurrentPage("About Me")}>
          Christopher Erickson
        </a>
      </h1>
      <nav>
        <ul>
          {pageSelected
            ? pages.map((page) => (
                <li
                  className={`${
                    currentPage.name === page.name &&
                    pageSelected &&
                    "navActive"
                  }`}
                  key={page.name}
                >
                  <span
                    onClick={() => {
                      setCurrentPage(page);
                      setPageSelected(true);
                    }}
                  >
                    {capitalizeFirstLetter(page.name)}
                  </span>
                </li>
              ))
            : pages.map((page) => (
                <li
                  className={`${page.name === "About Me" && "navActive"}`}
                  key={page.name}
                >
                  <span
                    onClick={() => {
                      setCurrentPage(page);
                      setPageSelected(true);
                    }}
                  >
                    {capitalizeFirstLetter(page.name)}
                  </span>
                </li>
              ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
