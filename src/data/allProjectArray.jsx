import React from "react";
import Tech from "../components/atoms/Tech/Tech";
import HtmlSVG from "../components/atoms/SVG/HtmlSVG";
import CssSVG from "../components/atoms/SVG/CssSVG";
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
    name: "Bnw Unknown",
    url: "bnw-unknown",
    tagline: "Photographie argentique noir et blanc",
    client: "Projet personnel",
    technology: [
      <Tech SVG={<JavaScriptSVG />} name="JavaScript" />,
      <Tech SVG={<ReactSVG />} name="React" />,
      <Tech SVG={<SassSVG />} name="Sass | Scss" />,
      <Tech SVG={<NodeSVG />} name="Node" />,
      <Tech SVG={<ESLintSVG />} name="ESLint" />,
    ],
    repository: "https://github.com/Lucasbeneston/bnw_unknown",
    link: "https://bnw-unknown.herokuapp.com/",
    description: `Étant photographe amateur à mes heures perdues, j’ai décidé de créer un site pour présenter quelques-unes de mes photos, réalisées avec d’anciens appareils argentiques. Pour rendre le site plus interactif, j’ai voulu permettre à l’utilisateur de « rentrer » dans d’une chambre noire, en inversant les couleurs des photos, comme s’il s’agissait de négatifs.`,
    type: "Application web",
    date: "Janvier 2021",
    poster: "BnwUnknown/Bnw_unknown_laptop.jpg",
    illustrations: [
      "BnwUnknown/Bnw_unknown_laptop_black.jpg",
      "BnwUnknown/Bnw_unknown_selected.jpg",
      "BnwUnknown/Bnw_unknown_smartphone.jpg",
      "BnwUnknown/Bnw_unknown_smartphone_black.jpg",
      "BnwUnknown/Bnw_unknown_laptop.jpg",
    ],
    video: "BnwUnknown/Bnw_unknown.mp4",
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
    description: `La Fredelux Agency est une agence événementiel proposant un service de réservation de DJs pour tous types d’événements, mais également la création d’univers sonores sur-mesure. Le site internet de la Fredelux Agency s’adresse donc principalement aux organisateurs d’événements (et dans une moindre mesure aux particuliers) qui cherchent à réserver des DJs pour des événements, mais également aux propriétaires d’établissements (hôtels, restaurants, magasins, etc.) qui souhaitent créer une ambiance sonore sur-mesure. Le projet présenté ici est une refonte totale du site internet de la Fredelux Agency, c’est-à-dire autant à l’expérience utilisateur en simplifiant par exemple le processus de réservation des DJs, mais également visuellement, en uniformisant le design des différentes sections du site. Cette refonte générale fut accompagnée de la création d’une nouvelle identité visuelle correspondant à l’image de l’agence, avec notamment la création de nouveaux logos ou encore la réalisation de prints (cartes de visite). Enfin, de nouvelles fonctionnalités ont été ajoutées par rapport au site d’origine, avec la création d’un back- office permettant à un administrateur de créer, modifier ou supprimer des DJs directement depuis une interface sécurisée. Pour mener à bien ce projet, j’ai décidé de créer une API REST et d’utiliser Node.js pour le back-end, PostgresSQL pour la base de données et enfin de React.js (avec l’utilisation de SASS) pour le front-end.`,
    type: "Application web",
    date: "Novembre 2020",
    poster: "FredeluxAgency/Fredelux_agency.jpg",
    illustrations: [
      "FredeluxAgency/Fredelux_agency_laptop.jpg",
      "FredeluxAgency/Fredelux_agency_laptop2.jpg",
      "FredeluxAgency/Fredelux_agency_laptop3.jpg",
      "FredeluxAgency/Fredelux_agency_mobile.jpg",
      "FredeluxAgency/Fredelux_agency_mobile2.jpg",
      "FredeluxAgency/Fredelux_agency.jpg",
    ],
    video: "FredeluxAgency/FredeluxAgency.mp4",
  },

  {
    id: 3,
    name: "Goweb store",
    url: "goweb-store",
    tagline: "Site de e-commerce fictif",
    client: "Projet personnel",
    technology: [
      <Tech SVG={<JavaScriptSVG />} name="JavaScript" />,
      <Tech SVG={<ReactSVG />} name="React" />,
      <Tech SVG={<SassSVG />} name="Sass | Scss" />,
      <Tech SVG={<NodeSVG />} name="Node" />,
      <Tech SVG={<ESLintSVG />} name="ESLint" />,
    ],
    repository: "https://github.com/Lucasbeneston/goweb_store",
    link: "https://goweb-store.herokuapp.com/",
    description: `Goweb store est un projet Front-End de création d'un site de e-commerce fictif, dans le but de réaliser plusieurs fonctionnalités (gestion d'un panier, intégration, carrousel d'images, etc.). Réalisé en React, ce projet ne possède ni de back-end, ni de base de données et aucuns articles ne pourras être acheté !`,
    type: "Application web",
    date: "Décembre 2020",
    poster: "Goweb/Goweb.jpg",
    illustrations: [
      "Goweb/Goweb_laptop.jpg",
      "Goweb/Goweb_laptop_mobile.jpg",
      "Goweb/Goweb_mobile.jpg",
      "Goweb/Goweb_mobile_2.jpg",
      "Goweb/Goweb.jpg",
    ],
    video: "Goweb/Goweb.mp4",
  },

  {
    id: 4,
    name: "Game Boy Color",
    url: "game-boy-color",
    tagline: "Reproduction d'une Game Boy Color uniquement en CSS",
    client: "Projet personnel",
    technology: [
      <Tech SVG={<HtmlSVG />} name="HTML" />,
      <Tech SVG={<CssSVG />} name="CSS" />,
      <Tech SVG={<JavaScriptSVG />} name="JavaScript" />,
    ],
    repository: "https://github.com/Lucasbeneston/GameBoy",
    link: "https://lucasbeneston.github.io/GameBoy/",
    description:
      "Reproduction à l'identique d'une Game Boy Color en CSS et réalisation d'animations de changement de couleurs. (A noter qu'un Konami Code se cache dans ce projet...)",
    type: "Application web",
    date: "Avril 2020",
    poster: "GameBoy/gameboy.jpg",
    illustrations: [
      "GameBoy/gameboy_1.jpg",
      "GameBoy/gameboy_2.jpg",
      "GameBoy/gameboy_3.jpg",
      "GameBoy/gameboy_4.jpg",
      "GameBoy/gameboy_5.jpg",
      "GameBoy/gameboy.jpg",
    ],
    video: "GameBoy/Gameboy.mp4",
  },

  {
    id: 5,
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
      "Application React Native (fictive) sur le thème du cinéma. Pour ce projet, j'ai décidé d'exploiter l'API de The Movie Database (TMDb) pour permettre à un utilisateur de rechercher un film selon son nom et de créer une liste de ses films préférés.",
    type: "Application mobile",
    date: "Novembre 2020",
    poster: "MyFilms/myFilms.jpg",
    illustrations: [
      "MyFilms/myFilms_1.jpg",
      "MyFilms/myFilms_2.jpg",
      "MyFilms/myFilms.jpg",
    ],
    video: null,
  },

  {
    id: 6,
    name: "AirBnb clone",
    url: "airbnb-clone",
    tagline: "Reproduction de certaines fonctionnalités de AirBnb",
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
    repository: "https://github.com/Lucasbeneston/airbnb-clone-front",
    link: null,
    description:
      "L’objectif de ce projet était de reproduire les fonctionnalités de bases du site Airbnb, c’est-à-dire l’inscription d’un utilisateur avec des rôles différents (touriste ou hôte), la connexion d’un utilisateur ou encore la recherche ou l’ajout d’un appartement.",
    type: "Application web",
    date: "Septembre 2020",
    poster: "Airbnb/Airbnb.jpg",
    illustrations: [
      "Airbnb/Airbnb_laptop_mobile.jpg",
      "Airbnb/Airbnb_mobile.jpg",
      "Airbnb/Airbnb_tablet.jpg",
      "Airbnb/Airbnb.jpg",
    ],
    video: null,
  },

  {
    id: 7,
    name: "Contrast Agency",
    url: "contrast-agency",
    tagline: "Agence web fictive",
    client: "Projet de formation",
    technology: [
      <Tech SVG={<HtmlSVG />} name="HTML" />,
      <Tech SVG={<CssSVG />} name="CSS" />,
      <Tech SVG={<JavaScriptSVG />} name="JavaScript" />,
    ],
    repository: "https://github.com/Lucasbeneston/ContrastAgency",
    link: "https://lucasbeneston.github.io/ContrastAgency/",
    description:
      "Pour ce projet, le client est une agence web (fictive) qui souhaite réaliser son site internet (vitrine) de manière minimaliste, mais dont l’objectif principal est que le client rentre en contact avec elle par le biais d’un e-mail. Pour satisfaire le client, j'ai décidé de créer une identité visuelle minimaliste basée sur le contraste entre le noir et blanc et l’ajout d’une touche de couleur (selon le choix de l’utilisateur). De plus, pour simplifier la prise de contact, j'ai décidé de placer un formulaire de manière statique sur la partie droite du site, pour que l’utilisateur puisse avoir la possibilité à tout moment de contacter l’agence.",
    type: "Application web",
    date: "Mars 2020",
    poster: "ContrastAgency/Contrast_agency.jpg",
    illustrations: [
      "ContrastAgency/Contrast_agency_laptop.jpg",
      "ContrastAgency/Contrast_agency_mobile_black.jpg",
      "ContrastAgency/Contrast_agency_mobile_white.jpg",
      "ContrastAgency/Contrast_agency.jpg",
    ],
    video: null,
  },

  {
    id: 8,
    name: "Netflix clone",
    url: "netflix-clone",
    tagline: "Reproduction de certaines fonctionnalités de Netflix",
    client: "Projet de formation",
    technology: [
      <Tech SVG={<JavaScriptSVG />} name="JavaScript" />,
      <Tech SVG={<SassSVG />} name="Sass | Scss" />,
      <Tech SVG={<NodeSVG />} name="Node" />,
      <Tech SVG={<SqlSVG />} name="SQL" />,
      <Tech SVG={<ExpressSVG />} name="Express" />,
    ],
    repository: "https://github.com/Lucasbeneston/NetflixClone",
    link: "https://lucasbeneston.github.io/NetflixClone/",
    description:
      "Reproduction de la page d'accueil de Netflix en utilisant l'API DBmovie. Mise en place de différentes options comme la possibilité de  rechercher un film dans la barre de recherche, d'afficher une modale avec les informations des films, etc.",
    type: "Application web",
    date: "Septembre 2020",
    poster: "Netflix/Netflix.jpg",
    illustrations: [
      "Netflix/Netflix_desktop_tablet.jpg",
      "Netflix/Netflix_tablet.jpg",
      "Netflix/Netflix.jpg",
    ],
    video: null,
  },

  {
    id: 9,
    name: "Maquette responsive",
    url: "maquette-responsive",
    tagline: "Intégration de maquettes mobile, tablet et desktop",
    client: "Projet de formation",
    technology: [
      <Tech SVG={<HtmlSVG />} name="HTML" />,
      <Tech SVG={<CssSVG />} name="CSS" />,
    ],
    repository:
      "https://github.com/Lucasbeneston/P3_C2_Interface_statique_adaptable",
    link: "https://lucasbeneston.github.io/P3_C2_Interface_statique_adaptable/",
    description:
      "L’objectif de ce projet était de réaliser une interface utilisateur web statique et adaptable à partir d’une maquette responsive (smartphone, tablette et ordinateur) en utilisant les méthodes de mise en page Flexbox et/ou CSS Grid. Respect des règles d'accessibilité (OPQUAST).",
    type: "Application web",
    date: "Septembre 2020",
    poster: "MaquetteResponsive/Maquette_responsive.jpg",
    illustrations: [
      "MaquetteResponsive/Maquette_responsive_desktop_tablet.jpg",
      "MaquetteResponsive/Maquette_responsive_mobile.jpg",
      "MaquetteResponsive/Maquette_responsive_tablet.jpg",
      "MaquetteResponsive/Maquette_responsive.jpg",
    ],
    video: null,
  },
];

export default projects;
