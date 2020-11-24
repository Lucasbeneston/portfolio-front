import React from "react";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <h1 className="nav_title">Lucas BENESTON</h1>
      <div type="button" className="nav_burger">
        <div className="nav_burger_line_top" />
        <div className="nav_burger_line_bottom" />
      </div>
    </nav>
  );
}
