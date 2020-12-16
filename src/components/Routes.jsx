import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjetsList from "./pages/Projects/Projects";
import Projet from "./pages/Projet/Projet";
import Informations from "./pages/Informations/Informations";
import NoMatch from "./pages/NoMatch/NoMatch";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projets" component={ProjetsList} />
      <Route exact path="/projets/:urlName" component={Projet} />
      <Route exact path="/informations" component={Informations} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
}
