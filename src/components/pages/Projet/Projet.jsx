import React from "react";
import { useParams } from "react-router-dom";
import allProjects from "../../../data/allProjectArray";

import "./Projet.scss";

export default function Projet() {
  const { urlName } = useParams();
  const project = allProjects.find((projet) => projet.url === urlName);

  return (
    <div className="projet">
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
        <h4>Client : {project.client}</h4>
        <h4>
          Technos :
          {project.technology.map((technology) => technology).join(" • ")}
        </h4>
        <h4>Lien : {project.link}</h4>
        <h4>Github : {project.repository}</h4>
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
