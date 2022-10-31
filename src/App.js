// Root Component for Application
import React, { useState } from "react";
import Nav from "./components/Nav/index.nav";
import About from "./components/About/index.about";
import Project from "./components/Project/index.project";

function App() {
  // page navigation
  const [pages] = useState([
    {
      name: "projects",
      // description: "Project Display",
    },
    {
      name: "resume",
      // description: "Resume page",
    },
    {
      name: "contact",
      // description: "Contact Section",
    },
  ]);


  // page selection state
  // const [pageSelected, setPageSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  
  return (
    <div className="App">
      <Nav>
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      </Nav>
      <main>
        <About></About>
        <Project></Project>
      </main>
    </div>
  );
}

export default App;
