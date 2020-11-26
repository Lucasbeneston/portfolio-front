import React from "react";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";

import "./MenuSlide.scss";

export default function MenuSlide({ onClick, open }) {
  return (
    <div className={`menu ${open ? "open" : ""}`}>
      <div className="menu_links">
        <HashLink onClick={onClick} to="/#">
          Accueil
        </HashLink>
        <HashLink onClick={onClick} to="/projets/#">
          Projets
        </HashLink>
        <HashLink onClick={onClick} to="/informations/#">
          Informations
        </HashLink>
      </div>
      <div className="menu_footer">
        <div className="menu_footer_informations">
          <a href="tel:+33675202413">+33(0)6 75 20 24 13</a>
          <a href="mailto:benestonlucas@hotmail.fr">benestonlucas@hotmail.fr</a>
          <div className="menu_footer_informations_socials">
            <a href="https://www.linkedin.com/in/beneston-lucas/">Linkedin</a>
            <a href="https://github.com/Lucasbeneston">Github</a>
            <a
              href={`${process.env.PUBLIC_URL}/images/CV-dev-front-BENESTON-Lucas.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </div>
        </div>
        <h5 className="menu_footer_copy">&copy; 2020 - Lucas BENESTON</h5>
      </div>
    </div>
  );
}

MenuSlide.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
