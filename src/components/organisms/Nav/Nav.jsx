import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { useHistory, useLocation } from "react-router-dom";
import MenuContext from "../../../contexts/MenuContext";
import BurgerMenu from "../../molecules/BurgerMenu/BurgerMenu";
import MenuSlide from "../../molecules/MenuSlide/MenuSlide";
import ArrowLeft from "../../atoms/SVG/ArrowLeft";

import "./Nav.scss";

export default function Nav() {
  const context = useContext(MenuContext);
  const history = useHistory();
  const location = useLocation();

  const { open, setOpen } = context;
  const { pathname } = location;

  const switchOpen = () => {
    setOpen(!open);
  };

  const click = () => {
    if (open === false) {
      setOpen(true);
    }
    setOpen(false);
  };

  return (
    <nav className={`nav ${open ? "open" : ""}`}>
      {pathname !== "/" ? (
        <div
          className={`nav_goBack ${open ? "open" : ""}`}
          role="button"
          tabIndex={0}
          onClick={() => history.goBack()}
          onKeyPress={() => history.goBack()}
        >
          <ArrowLeft />
          <span>Retour</span>
        </div>
      ) : null}

      <HashLink onClick={click} to="/#" className="nav_title">
        Lucas BENESTON
      </HashLink>
      <BurgerMenu onClick={switchOpen} open={open} />
      <MenuSlide onClick={click} open={open} />
    </nav>
  );
}
