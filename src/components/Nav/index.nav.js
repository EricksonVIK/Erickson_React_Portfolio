import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  //   function pageSelected() {
  //     console.log(`clicked`);
  //   }

  return (
    <header className="flex-row px-1">
      <h2>
        <a
          data-testid="link"
          href="#about"
          onClick={() => setCurrentPage("About Me")}
        >
          Erickson
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {pages.map((page) => (
            <li
              className={`mx-1 ${
                currentPage.name === page.name && "navActive"
              }`}
              key={page.name}
            >
              <span
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {capitalizeFirstLetter(page.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>{" "}
    </header>
  );
}

export default Nav;
