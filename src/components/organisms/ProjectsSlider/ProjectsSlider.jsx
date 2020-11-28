import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import allProjects from "../../../data/allProjectArray";
import CardCarousel from "../../molecules/CardCarousel/CardCarousel";

import "./ProjectsSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsSlider({ slidesToShow }) {
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
    slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <Slider id="test" {...settings}>
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

ProjectsSlider.defaultProps = {
  slidesToShow: 1,
};

ProjectsSlider.propTypes = {
  slidesToShow: PropTypes.number,
};
