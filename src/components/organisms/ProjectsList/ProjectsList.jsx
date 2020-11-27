import React from "react";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";
import allProjects from "../../../data/allProjectArray";

import "./ProjectsList.scss";

export default function ProjectsList({ endArray }) {
  return (
    <div className="projectsList">
      {allProjects
        .map((project) => (
          <HashLink
            to={`/projets/${project.url}/#`}
            className="projectsList_card"
            key={project.name}
          >
            <img
              className="projectsList_card_image"
              src={`${process.env.PUBLIC_URL}/images/${project.poster}`}
              alt={`Une illustration du projet ${project.name}`}
            />
            <h2 className="projectsList_card_name">{project.name}</h2>
            <p className="projectsList_card_tagline">{project.tagline}</p>
          </HashLink>
        ))
        .slice(0, endArray)}
    </div>
  );
}

ProjectsList.defaultProps = {
  endArray: allProjects.length,
};

ProjectsList.propTypes = {
  endArray: PropTypes.number,
};
