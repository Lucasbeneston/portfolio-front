import React from "react";
// import Slider from "react-slick";
import allProjects from "../../../data/allProjectArray";

import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <h2 className="home_header_title">
          Développeur Front-end React et React-native
        </h2>
        <h3 className="home_header_subtitle">A la recherche d'un emploi</h3>
      </div>
      <div className="home_projects">
        {allProjects.map((project) => (
          <div key={project.name} className="home_projects_card">
            <img
              className="home_projects_card_image"
              src={`${process.env.PUBLIC_URL}/images/${project.poster}`}
              alt={`Illustration du projet ${project.name}`}
            />
            <div className="home_projects_card_informations">
              <h4 className="home_projects_card_informations_date">
                {project.date}
              </h4>
              <h3 className="home_projects_card_informations_name">
                {project.name}
              </h3>
              <p className="home_projects_card_informations_tagline">
                {project.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
