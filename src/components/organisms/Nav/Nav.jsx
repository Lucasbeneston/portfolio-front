import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Nav.scss";

export default function Nav() {
  const [open, setOpen] = useState(false);
  console.log({ open });

  const switchOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="nav">
      <HashLink to="/#" className="nav_title">
        Lucas BENESTON
      </HashLink>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={`nav_burger ${open ? "open" : null}`}
        role="button"
        tabIndex={0}
        onClick={switchOpen}
      >
        <div className={`nav_burger_line_left ${open ? "open" : null}`} />
        <div className={`nav_burger_line_middle ${open ? "open" : null}`} />
        <div className={`nav_burger_line_right ${open ? "open" : null}`} />
        <div
          className={`nav_burger_line_bottom_left ${open ? "open" : null}`}
        />
        <div className={`nav_burger_line_top_right ${open ? "open" : null}`} />
        <div className={`nav_burger_line_right ${open ? "open" : null}`} />

        <div className="nav_burger_line_open_left" />
      </div>
    </nav>
  );
}
