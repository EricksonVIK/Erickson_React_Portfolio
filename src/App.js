// Root Component for Application
import React, { useState } from "react";
import Nav from "./components/Nav/index.nav"
import About from "./components/About/index.about";
import Project from "./components/Project/index.project"


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
        <Project></Project>
      </main>
    </div>
  );
}

export default App;
