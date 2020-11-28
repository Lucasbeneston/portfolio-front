import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import MenuContext from "../../../contexts/MenuContext";
import BurgerMenu from "../../molecules/BurgerMenu/BurgerMenu";
import MenuSlide from "../../molecules/MenuSlide/MenuSlide";

import "./Nav.scss";

export default function Nav() {
  const context = useContext(MenuContext);
  const { open, setOpen } = context;

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
      <HashLink onClick={click} to="/#" className="nav_title">
        Lucas BENESTON
      </HashLink>
      <BurgerMenu onClick={switchOpen} open={open} />
      <MenuSlide onClick={click} open={open} />
    </nav>
  );
}
