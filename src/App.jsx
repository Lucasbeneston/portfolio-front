import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MenuContext from "./contexts/MenuContext";
import Nav from "./components/organisms/Nav/Nav";
import Routes from "./components/Routes";
import Footer from "./components/organisms/Footer/Footer";

import "./App.scss";

function App() {
  const [open, setOpen] = useState(false);

  const contextMenu = {
    open,
    setOpen,
  };

  return (
    <Router>
      <MenuContext.Provider value={contextMenu}>
        <Nav />
        <Routes />
        <Footer />
      </MenuContext.Provider>
    </Router>
  );
}

export default App;
