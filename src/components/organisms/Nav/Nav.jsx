import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <HashLink to="/#" className="nav_title">
        Lucas BENESTON
      </HashLink>
      <div type="button" className="nav_burger">
        <div className="nav_burger_line_top" />
        <div className="nav_burger_line_bottom" />
      </div>
    </nav>
  );
}
