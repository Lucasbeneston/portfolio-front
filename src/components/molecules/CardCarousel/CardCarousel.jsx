import React from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import "./CardCarousel.scss";

export default function CardCarousel({ url, name, poster, date, tagline }) {
  return (
    <div key={name} className="carousel_card">
      <HashLink to={`/projets/${url}`}>
        <img
          className="carousel_card_image"
          src={`${process.env.PUBLIC_URL}/images/${poster}`}
          alt={`Illustration du projet ${name}`}
        />
        <div className="carousel_card_informations">
          <h4 className="carousel_card_informations_date">{date}</h4>
          <h3 className="carousel_card_informations_name">{name}</h3>
          <p className="carousel_card_informations_tagline">{tagline}</p>
        </div>
      </HashLink>
    </div>
  );
}

CardCarousel.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};
