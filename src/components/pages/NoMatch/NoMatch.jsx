import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import MenuContext from "../../../contexts/MenuContext";
import "./NoMatch.scss";

export default function NoMatch() {
  const context = useContext(MenuContext);
  const { open } = context;

  return (
    <div className={`noMatch ${open ? "open" : ""}`}>
      <h2 className="noMatch_oops">Oops...</h2>
      <h3 className="noMatch_informations">
        La page demandé n'est pas disponible actuellement !
      </h3>
      <HashLink to="/#" className="noMatch_button">
        Retour à la page d'accueil
      </HashLink>
    </div>
  );
}
