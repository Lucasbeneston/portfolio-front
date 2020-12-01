import React, { useContext } from "react";
import MenuContext from "../../../contexts/MenuContext";

import Tech from "../../atoms/Tech/Tech";
import JavaScriptSVG from "../../atoms/SVG/JavaScriptSVG";
import SassSVG from "../../atoms/SVG/SassSVG";
import NodeSVG from "../../atoms/SVG/NodeSVG";
import ReactSVG from "../../atoms/SVG/ReactSVG";
import SqlSVG from "../../atoms/SVG/SqlSVG";
import ESLintSVG from "../../atoms/SVG/ESLintSVG";
import MochaSVG from "../../atoms/SVG/MochaSVG";
import ExpressSVG from "../../atoms/SVG/ExpressSVG";

import "./Informations.scss";

export default function Informations() {
  const context = useContext(MenuContext);
  const { open } = context;

  return (
    <div className={`informations ${open ? "open" : ""}`}>
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
        <div className="informations_about_technologies">
          <h4 className="informations_about_technologies_title">
            💻 Technologies
          </h4>
          <div className="informations_about_technologies_items">
            <Tech SVG={<JavaScriptSVG />} name="JavaScript" />
            <Tech SVG={<ReactSVG />} name="React" />
            <Tech SVG={<NodeSVG />} name="Node" />
            <Tech SVG={<SassSVG />} name="Sass | Scss" />
            <Tech SVG={<ReactSVG />} name="React-Native" />
            <Tech SVG={<SqlSVG />} name="SQL" />
            <Tech SVG={<ExpressSVG />} name="Express" />
            <Tech SVG={<ESLintSVG />} name="ESLint" />
            <Tech SVG={<MochaSVG />} name="Mocha | Chaï" />
          </div>
        </div>

        <div className="informations_about_description">
          <div>
            <h4 className="informations_about_description_title">
              👨‍💻 A propos de moi
            </h4>
            <p className="informations_about_description_paragraphe">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              quaerat voluptatum architecto debitis eius dignissimos ipsam
              reiciendis suscipit. Eos nisi repellendus ad quibusdam labore
              ipsam officiis voluptatibus inventore amet vero.
            </p>
          </div>

          <div>
            <h4 className="informations_about_description_title">
              🔍 Ce que je recherche
            </h4>
            <p className="informations_about_description_paragraphe">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              quaerat voluptatum architecto debitis eius dignissimos ipsam
              reiciendis suscipit. Eos nisi repellendus ad quibusdam labore
              ipsam officiis voluptatibus inventore amet vero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
