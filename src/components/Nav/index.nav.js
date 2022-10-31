import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const pages = [
    {
      name: "projects",
      description: "Selection of projects",
    },
    {
      name: "resume",
      description: "Resume page",
    },
    ];
    
    function pageSelected() {
        console.log(`clicked`)
    }

  return (
    <header>
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="tbd">
            {" "}
          </span>{" "}
          Erickson
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">About Me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {pages.map((page) => (
            <li className="mx-2" key={page.name}>
              <span onClick ={pageSelected}> {capitalizeFirstLetter(page.name)} </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
