import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import ProjectsSlider from "../../organisms/ProjectsSlider/ProjectsSlider";
import ProjectsList from "../../organisms/ProjectsList/ProjectsList";

import "./Home.scss";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="home">
      <div className="home_header">
        <h2 className="home_header_title">
          Développeur Front-End React et React-native
        </h2>
        <h3 className="home_header_subtitle">A la recherche d'un emploi</h3>
      </div>
      {width < 769 ? <ProjectsSlider /> : <ProjectsList endArray={4} />}
      <div className="home_allProjects">
        <HashLink to="/projets/#" className="home_allProjects_link">
          Découvrir mes projets
        </HashLink>
      </div>
    </div>
  );
}
