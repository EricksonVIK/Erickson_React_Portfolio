import React from "react";

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

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            {" "}
          </span>{" "}
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
            <li className="mx-2" key={page.name}>
              <span> {page.name} </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
