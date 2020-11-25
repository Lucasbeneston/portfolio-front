import React from "react";

const projects = [
  {
    id: 1,
    name: "MyFilms",
    url: "my-films",
    tagline: "Application React-Native sur le thème du cinéma",
    client: "Projet personnel",
    technology: ["React", "React-Native"],
    repository: (
      <a href="https://github.com/Lucasbeneston/MyFilms_ReactNativeApp">
        Lucasbeneston/MyFilms_ReactNativeApp
      </a>
    ),
    link: "Non publié",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
    type: "Application mobile",
    date: "Novembre 2020",
    poster: "MyFilms/myFilms.jpg",
    illustrations: ["./illustration/numéro1.jpg", "./illustration/numéro2.jpg"],
    video: "./video/sourcedelavideo.mp4",
  },
  {
    id: 2,
    name: "Fredelux Agency",
    url: "fredelux-agency",
    tagline:
      "Agence de réservation de DJs et création d'univers sonores sur-mesure",
    client: "Fredelux Agency",
    technology: ["React", "Node", "Sass", "ESLint"],
    repository: "Privé",
    link: <a href="http://fredeluxagency.com/">www.fredeluxagency.com</a>,
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
    technology: ["JavaScript", "CSS", "HTML"],
    repository: (
      <a href="https://github.com/Lucasbeneston/GameBoy">
        Lucasbeneston/GameBoy
      </a>
    ),
    link: (
      <a href="https://lucasbeneston.github.io/GameBoy/">
        https://lucasbeneston.github.io/GameBoy/
      </a>
    ),
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
    technology: ["React", "Node", "Sass", "ESLint"],
    repository: "Privé",
    link: "Non publié",
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
