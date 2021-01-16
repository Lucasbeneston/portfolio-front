import React, { useContext } from "react";
import MenuContext from "../../../contexts/MenuContext";

import "./Footer.scss";

export default function Footer() {
  const context = useContext(MenuContext);
  const { open } = context;
  const date = new Date().getFullYear();

  return (
    <footer className={`footer ${open ? "open" : ""}`}>
      <a href="tel:+33675202413">+33(0)6 75 20 24 13</a>
      <a href="mailto:benestonlucas@hotmail.fr">benestonlucas@hotmail.fr</a>
      <h5 className="footer_copyright">&copy; {date} - Lucas BENESTON</h5>
    </footer>
  );
}
