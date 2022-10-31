// Root Component for Application
import React, { useState } from "react";
import Nav from "./components/Nav/index.nav"
import About from "./components/About/index.about";


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
