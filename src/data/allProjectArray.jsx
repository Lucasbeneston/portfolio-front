import React from "react";
import Tech from "../components/atoms/Tech/Tech";
import JavaScriptSVG from "../components/atoms/SVG/JavaScriptSVG";
import SassSVG from "../components/atoms/SVG/SassSVG";
import NodeSVG from "../components/atoms/SVG/NodeSVG";
import ReactSVG from "../components/atoms/SVG/ReactSVG";
import SqlSVG from "../components/atoms/SVG/SqlSVG";
import ESLintSVG from "../components/atoms/SVG/ESLintSVG";
import MochaSVG from "../components/atoms/SVG/MochaSVG";
import ExpressSVG from "../components/atoms/SVG/ExpressSVG";

const projects = [
  {
    id: 1,
    name: "MyFilms",
    url: "my-films",
    tagline: "Application React-Native sur le thème du cinéma",
    client: "Projet personnel",
    technology: [
      <Tech SVG={<JavaScriptSVG />} name="JavaScript" />,
      <Tech SVG={<ReactSVG />} name="React" />,
      <Tech SVG={<ReactSVG />} name="React-Native" />,
    ],
    repository: "https://github.com/Lucasbeneston/MyFilms_ReactNativeApp",
    link: null,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
    type: "Application mobile",
    date: "Novembre 2020",
    poster: "MyFilms/myFilms.jpg",
    illustrations: ["MyFilms/myFilms.jpg", "MyFilms/myFilms.jpg"],
    video: "./video/sourcedelavideo.mp4",
  },
  {
    id: 2,
    name: "Fredelux Agency",
    url: "fredelux-agency",
    tagline:
      "Agence de réservation de DJs et création d'univers sonores sur-mesure",
    client: "Fredelux Agency",
    technology: [
      <Tech SVG={<JavaScriptSVG />} name="JavaScript" />,
      <Tech SVG={<ReactSVG />} name="React" />,
      <Tech SVG={<SassSVG />} name="Sass | Scss" />,
      <Tech SVG={<NodeSVG />} name="Node" />,
      <Tech SVG={<SqlSVG />} name="SQL" />,
      <Tech SVG={<ExpressSVG />} name="Express" />,
      <Tech SVG={<ESLintSVG />} name="ESLint" />,
      <Tech SVG={<MochaSVG />} name="Mocha | Chaï" />,
    ],
    repository: null,
    link: "http://fredeluxagency.com/",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
    type: "Application web",
    date: "Novembre 2020",
    poster: "FredeluxAgency/fredeluxAgency.jpg",
    illustrations: [
      "FredeluxAgency/fredeluxAgencyDesktopHome.jpg",
      "FredeluxAgency/fredeluxAgencyDesktopContact.jpg",
      "FredeluxAgency/fredeluxAgencyRecadré.jpg",
    ],
    video: "./video/sourcedelavideo.mp4",
  },
  {
    id: 3,
    name: "Game Boy Color",
    url: "game-boy-color",
    tagline: "Reproduction d'un Game Boy Color uniquement en CSS",
    client: "Projet personnel",
    technology: [<Tech SVG={<JavaScriptSVG />} name="JavaScript" />],
    repository: "https://github.com/Lucasbeneston/GameBoy",
    link: "https://lucasbeneston.github.io/GameBoy/",
    description:
      "Reproduction à l'identique d'une Game Boy Color en CSS et réalisation d'animations de changement de couleurs. (A noter qu'un Konami Code se cache dans ce projet...)",
    type: "Application web",
    date: "Avril 2020",
    poster: "GameBoy/gameboy.png",
    illustrations: ["GameBoy/gameboy.png", "GameBoy/gameboy.png"],
    video: "./video/sourcedelavideo.mp4",
  },
  {
    id: 4,
    name: "AirBnb clone",
    url: "airbnb-clone",
    tagline: "Reproduction des certaines fonctionnalités de AirBnb",
    client: "Projet de formation",
    technology: [
      <Tech SVG={<JavaScriptSVG />} name="JavaScript" />,
      <Tech SVG={<ReactSVG />} name="React" />,
      <Tech SVG={<SassSVG />} name="Sass | Scss" />,
      <Tech SVG={<NodeSVG />} name="Node" />,
      <Tech SVG={<SqlSVG />} name="SQL" />,
      <Tech SVG={<ExpressSVG />} name="Express" />,
      <Tech SVG={<ESLintSVG />} name="ESLint" />,
    ],
    repository: null,
    link: null,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
    type: "Application web",
    date: "Septembre 2020",
    poster: "Airbnb/airbnb.png",
    illustrations: ["Airbnb/airbnb.png", "Airbnb/airbnb.png"],
    video: "./video/sourcedelavideo.mp4",
  },

  {
    id: 5,
    name: "Netflix",
    url: "netflix-clone",
    tagline: "Reproduction des certaines fonctionnalités de Netflix",
    client: "Projet de formation",
    technology: [
      <Tech SVG={<JavaScriptSVG />} name="JavaScript" />,
      <Tech SVG={<SassSVG />} name="Sass | Scss" />,
      <Tech SVG={<NodeSVG />} name="Node" />,
      <Tech SVG={<SqlSVG />} name="SQL" />,
      <Tech SVG={<ExpressSVG />} name="Express" />,
    ],
    repository: null,
    link: null,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
    type: "Application web",
    date: "Septembre 2020",
    poster: "Airbnb/airbnb.png",
    illustrations: ["Airbnb/airbnb.png", "Airbnb/airbnb.png"],
    video: "./video/sourcedelavideo.mp4",
  },
];

export default projects;
