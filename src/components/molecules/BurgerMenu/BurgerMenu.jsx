import React from "react";
import PropTypes from "prop-types";
import "./BurgerMenu.scss";

export default function BurgerMenu({ onClick, open }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={`burger ${open ? "open" : ""}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
    >
      <div className={`burger_line_left ${open ? "open" : ""}`} />
      <div className={`burger_line_middle ${open ? "open" : ""}`} />
      <div className={`burger_line_right ${open ? "open" : ""}`} />
      <div className={`burger_line_bottom_left ${open ? "open" : ""}`} />
      <div className={`burger_line_top_right ${open ? "open" : ""}`} />
      <div className={`burger_line_right ${open ? "open" : ""}`} />

      <div className="nav_burger_line_open_left" />
    </div>
  );
}

BurgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
