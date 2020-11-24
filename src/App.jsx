import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/organisms/Nav/Nav";
import Routes from "./components/Routes";
import Footer from "./components/organisms/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <Router>
      <Nav />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
