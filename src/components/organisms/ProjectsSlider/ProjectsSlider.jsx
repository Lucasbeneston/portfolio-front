import React from "react";
import Slider from "react-slick";
import allProjects from "../../../data/allProjectArray";
import CardCarousel from "../../molecules/CardCarousel/CardCarousel";

import "./ProjectsSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsSlider() {
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
    <Slider {...settings}>
      {allProjects
        .map((project) => (
          <CardCarousel
            key={project.name}
            url={project.url}
            name={project.name}
            poster={project.poster}
            date={project.date}
            tagline={project.tagline}
          />
        ))
        .slice(0, 3)}
    </Slider>
  );
}
