import React from "react";
import ProjectsList from "../../organisms/ProjectsList/ProjectsList";

import "./Projects.scss";

export default function Projets() {
  return (
    <div className="projets">
      <h2 className="projets_title">Mes projets</h2>
      <ProjectsList />
    </div>
  );
}
