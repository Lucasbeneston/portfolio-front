import React from "react";
import { HashLink } from "react-router-hash-link";
import allProjects from "../../../data/allProjectArray";

import "./ProjetsList.scss";

export default function Projets() {
  return (
    <div className="projets">
      <h2 className="projets_title">Mes projets</h2>
      <div className="projets_list">
        {allProjects.map((project) => (
          <HashLink
            to={`/projets/${project.url}/#`}
            className="projets_list_card"
          >
            <img
              className="projets_list_card_image"
              src={`${process.env.PUBLIC_URL}/images/${project.poster}`}
              alt={`Une illustration du projet ${project.name}`}
            />
            <h2 className="projets_list_card_name">{project.name}</h2>
            <p className="projets_list_card_tagline">{project.tagline}</p>
          </HashLink>
        ))}
      </div>
    </div>
  );
}
