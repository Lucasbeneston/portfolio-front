import React from "react";
import Spotify from "../../atoms/SVG/Spotify";
import "./Informations.scss";

export default function Informations() {
  return (
    <div className="informations">
      <div className="informations_header">
        <h2 className="informations_header_title">
          Développeur Front-end React et React-native
        </h2>
        <h3 className="informations_header_subtitle">
          A la recherche d'un emploi
        </h3>
      </div>
      <img
        className="informations_image"
        src={`${process.env.PUBLIC_URL}/images/Lucas.jpg`}
        alt=""
      />
      <div className="informations_links">
        <a href="https://www.linkedin.com/in/beneston-lucas/">Linkedin</a>
        <a href="https://github.com/Lucasbeneston">Github</a>
        <a
          href={`${process.env.PUBLIC_URL}/images/CV-dev-front-BENESTON-Lucas.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>

      <div className="informations_about">
        <div>
          <h4 className="informations_about_title">💻 Technologies</h4>
          <div className="informations_about_technologies">
            <div className="informations_about_technologies_item">
              <Spotify />
              <h5>Javascript</h5>
            </div>
            <div className="informations_about_technologies_item">
              <Spotify />
              <h5>React</h5>
            </div>
            <div className="informations_about_technologies_item">
              <Spotify />
              <h5>Sass | Scss</h5>
            </div>
            <div className="informations_about_technologies_item">
              <Spotify />
              <h5>Node</h5>
            </div>

            <div className="informations_about_technologies_item">
              <Spotify />
              <h5>React-Native</h5>
            </div>
            <div className="informations_about_technologies_item">
              <Spotify />
              <h5>SQL</h5>
            </div>
            <div className="informations_about_technologies_item">
              <Spotify />
              <h5>Express</h5>
            </div>
            <div className="informations_about_technologies_item">
              <Spotify />
              <h5>ESLint</h5>
            </div>
            <div className="informations_about_technologies_item">
              <Spotify />
              <h5>Mocha | Chaï</h5>
            </div>
          </div>
        </div>

        <div>
          <h4 className="informations_about_title">👨‍💻 A propos de moi</h4>
          <p className="informations_about_paragraphe">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quaerat voluptatum architecto debitis eius dignissimos ipsam
            reiciendis suscipit. Eos nisi repellendus ad quibusdam labore ipsam
            officiis voluptatibus inventore amet vero.
          </p>
        </div>

        <div>
          <h4 className="informations_about_title">🔍 Ce que je recherche</h4>
          <p className="informations_about_paragraphe">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quaerat voluptatum architecto debitis eius dignissimos ipsam
            reiciendis suscipit. Eos nisi repellendus ad quibusdam labore ipsam
            officiis voluptatibus inventore amet vero.
          </p>
        </div>
      </div>
    </div>
  );
}
