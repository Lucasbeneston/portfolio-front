import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";
import allProjects from "../../../data/allProjectArray";

import "./ProjectsList.scss";

export default function ProjectsList({ endArray }) {
  const [videoHover, setVideoHover] = useState(null);
  const videos = document.querySelectorAll("video");
  const playVideo = () => {
    const videosArray = Array.from(videos).find(
      (video) => video.currentSrc === videoHover
    );
    if (videosArray !== undefined) {
      videosArray.play();
    }
  };

  const stopVideo = () => {
    const videosArray = Array.from(videos).find(
      (video) => video.currentSrc === videoHover
    );
    videosArray.pause();
  };

  useEffect(() => {
    playVideo();
  }, [videoHover]);

  return (
    <div className="projectsList">
      {allProjects
        .map((project) => (
          <HashLink
            to={`/projets/${project.url}/#`}
            className="projectsList_card"
            key={project.name}
            id={project.name}
            onMouseOver={(e) => setVideoHover(e.target.src)}
            onMouseOut={() => setVideoHover(null)}
          >
            {project.video !== null ? (
              <video
                onMouseOver={playVideo}
                onFocus={playVideo}
                onMouseOut={stopVideo}
                onBlur={stopVideo}
                className="projectsList_card_image"
                src={`${process.env.PUBLIC_URL}/images/${project.video}`}
                loop
                muted
              >
                <track default kind="captions" srcLang="fr" />
              </video>
            ) : (
              <img
                className="projectsList_card_image"
                src={`${process.env.PUBLIC_URL}/images/${project.poster}`}
                alt={`Une illustration du projet ${project.name}`}
              />
            )}

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
