import React from "react";
import PropTypes from "prop-types";
import "./Tech.scss";

export default function Tech({ SVG, name }) {
  return (
    <div className="itemTech">
      {SVG}
      <h5>{name}</h5>
    </div>
  );
}

Tech.propTypes = {
  SVG: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};
