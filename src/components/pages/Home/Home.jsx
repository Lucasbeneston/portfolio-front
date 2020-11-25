import React from "react";
import Slider from "react-slick";
import { HashLink } from "react-router-hash-link";
import allProjects from "../../../data/allProjectArray";
import CardCarousel from "../../molecules/CardCarousel/CardCarousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";

export default function Home() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home">
      <div className="home_header">
        <h2 className="home_header_title">
          Développeur Front-end React et React-native
        </h2>
        <h3 className="home_header_subtitle">A la recherche d'un emploi</h3>
      </div>
      <Slider {...settings}>
        {allProjects
          .map((project) => (
            <CardCarousel
              url={project.url}
              name={project.name}
              poster={project.poster}
              date={project.date}
              tagline={project.tagline}
            />
          ))
          .slice(0, 4)}
      </Slider>
      <div className="home_allProjects">
        <HashLink to="/projets/#" className="home_allProjects_link">
          Tous mes projets
        </HashLink>
      </div>
    </div>
  );
}
