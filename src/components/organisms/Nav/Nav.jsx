import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Nav.scss";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const switchOpen = () => {
    setOpen(!open);
  };

  const click = () => {
    setOpen(!open);
  };

  return (
    <nav className={`nav ${open ? "open" : ""}`}>
      <HashLink to="/#" className="nav_title">
        Lucas BENESTON
      </HashLink>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={`nav_burger ${open ? "open" : ""}`}
        role="button"
        tabIndex={0}
        onClick={switchOpen}
      >
        <div className={`nav_burger_line_left ${open ? "open" : ""}`} />
        <div className={`nav_burger_line_middle ${open ? "open" : ""}`} />
        <div className={`nav_burger_line_right ${open ? "open" : ""}`} />
        <div className={`nav_burger_line_bottom_left ${open ? "open" : ""}`} />
        <div className={`nav_burger_line_top_right ${open ? "open" : ""}`} />
        <div className={`nav_burger_line_right ${open ? "open" : ""}`} />

        <div className="nav_burger_line_open_left" />
      </div>
      <div className={`nav_menu ${open ? "open" : ""}`}>
        <div className="nav_menu_links">
          <HashLink onClick={click} to="/#">
            Accueil
          </HashLink>
          <HashLink onClick={click} to="/projets/#">
            Projets
          </HashLink>
          <HashLink onClick={click} to="/informations/#">
            Informations
          </HashLink>
        </div>
        <div className="nav_menu_footer">
          <div className="nav_menu_footer_informations">
            <a href="tel:+33675202413">+33(0)6 75 20 24 13</a>
            <a href="mailto:benestonlucas@hotmail.fr">
              benestonlucas@hotmail.fr
            </a>
            <div className="nav_menu_footer_informations_socials">
              <a href="https://www.linkedin.com/in/beneston-lucas/">Linkedin</a>
              <a href="https://github.com/Lucasbeneston">Github</a>
            </div>
          </div>
          <h5 className="nav_menu_footer_copy">&copy; 2020 - Lucas BENESTON</h5>
        </div>
      </div>
    </nav>
  );
}
