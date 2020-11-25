import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projets from "./pages/Projets/Projets";
import NoMatch from "./pages/NoMatch/NoMatch";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projets" component={Projets} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
}
