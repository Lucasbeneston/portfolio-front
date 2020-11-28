import React, { useContext } from "react";
import MenuContext from "../../../contexts/MenuContext";
import ProjectsList from "../../organisms/ProjectsList/ProjectsList";

import "./Projects.scss";

export default function Projets() {
  const context = useContext(MenuContext);
  const { open } = context;

  return (
    <div className={`projets ${open ? "open" : ""}`}>
      <h2 className="projets_title">Mes projets</h2>
      <ProjectsList />
    </div>
  );
}
