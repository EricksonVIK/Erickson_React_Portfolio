import React, { useState } from "react";
import Nav from "./components/Nav/index.nav";
import About from "./components/About/index.about";
import Project from "./components/Project/index.project";
import ContactForm from "./components/Contact/index.contact";
import Resume from "./components/Resume/index.resume";
import Footer from "./components/Footer/index.footer";

function App() {
  // page navigation
  const [pages] = useState([
    { name: "About Me" },
    { name: "Projects" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  // page selection state
  const [pageSelected, setPageSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  function renderPage(currentPage) {
    if(currentPage === "Projects") {
      return <Project></Project>
    } else if(currentPage === "Contact") {
      return <ContactForm></ContactForm>
    } else if(currentPage === "Resume") {
      return <Resume></Resume>
    } else {
      return <About></About>
    }

    }

  // jsx
  return (
    <div>
      <Nav
        pages={pages}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>
      <main>
        {pageSelected ? (
          renderPage(currentPage.name)
        ) : (
          <About></About>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;