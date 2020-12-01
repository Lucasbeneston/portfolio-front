import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MenuContext from "../../../contexts/MenuContext";
import allProjects from "../../../data/allProjectArray";

import "./Projet.scss";

export default function Projet() {
  const context = useContext(MenuContext);
  const { open } = context;

  const { urlName } = useParams();
  const project = allProjects.find((projet) => projet.url === urlName);

  return (
    <div className={`projet ${open ? "open" : ""}`}>
      <div className="projet_header">
        <h3 className="projet_header_date">
          {project.type} - {project.date}
        </h3>
        <h2 className="projet_header_name">{project.name}</h2>
        <p className="projet_header_tagline">{project.tagline}</p>
      </div>
      <img
        className="projet_poster"
        src={`${process.env.PUBLIC_URL}/images/${project.poster}`}
        alt={`Illustration du projet ${project.name}`}
      />
      <div className="projet_informations">
        <div className="projet_informations_link">
          {project.link !== null ? (
            <a className="projet_informations_link_true" href={project.link}>
              Site
            </a>
          ) : (
            <h4 className="projet_informations_link_null">Lien</h4>
          )}
          {project.repository !== null ? (
            <a
              className="projet_informations_link_true"
              href={project.repository}
            >
              Github
            </a>
          ) : (
            <h4 className="projet_informations_link_null">Github</h4>
          )}
        </div>
        <div className="projet_informations_technologies">
          {project.technology.map((technology) => technology)}
        </div>
      </div>
      <div className="projet_description">
        <p>{project.description}</p>
      </div>
      {project.illustrations.map((illustration) => (
        <img
          className="projet_images"
          src={`${process.env.PUBLIC_URL}/images/${illustration}`}
          alt={`Illustration du projet ${project.name}`}
        />
      ))}
    </div>
  );
}
