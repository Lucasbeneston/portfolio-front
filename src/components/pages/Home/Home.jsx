import React, { useContext, useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import MenuContext from "../../../contexts/MenuContext";
import animation from "./HomeAnimations";
import ProjectsSlider from "../../organisms/ProjectsSlider/ProjectsSlider";

import "./Home.scss";

export default function Home() {
  const context = useContext(MenuContext);
  const { open } = context;

  const [width, setWidth] = useState(window.innerWidth);
  const animationHome = animation;

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    if (width > 769) {
      animationHome();
    }
  }, [width, animationHome]);

  return (
    <div className={`home ${open ? "open" : ""}`}>
      <div className="home_header">
        <div className="home_header_container">
          <h2 className="home_header_container_title">
            Développeur Front-End React et React-native
          </h2>
          <h3 className="home_header_container_subtitle">
            A la recherche d'un emploi
          </h3>
        </div>
      </div>
      {width < 769 ? null : (
        <div className="home_scrollDown">
          <HashLink to="/#test" className="home_scrollDown_link">
            {width < 769 ? null : "Découvrir mes projets"}
          </HashLink>
          <div className="home_scrollDown_line" />
        </div>
      )}

      {width < 769 ? <ProjectsSlider /> : <ProjectsSlider slidesToShow={2} />}
      <div className="home_allProjects">
        <HashLink to="/projets/#" className="home_allProjects_link">
          {width < 769 ? "Découvrir mes projets" : "Voir plus de projets"}
        </HashLink>
        <div className="home_allProjects_line" />
      </div>
    </div>
  );
}
