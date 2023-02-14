import React from "react";
import exitCross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";
import "./CardPreview.scss";
const CardPreview = ({ togglePreview, beer }) => {
  return (
    <div className="card-preview">
      <div className="card-preview__content">
        <img
          src={exitCross}
          alt="Close menu"
          className="card-preview__cross"
          onClick={togglePreview}
        />
        <div className="card-preview__item">
          <div className="card-preview__item--name" onClick={togglePreview}>
            {beer.name}
          </div>
          <p className="card-preview__item--info">
            ABV: {beer.abv} | pH: {beer.ph}
          </p>
        </div>
        <img
          className="card-preview__image"
          src={beer.image_url}
          alt={beer.name}
        />
        <p className="card-preview__description">{beer.description}</p>
        <p className="card-preview__pairings">Food Pairings: </p>
        <Link to={`/beer/${beer.id}`} className="card-preview__link">
          <p >Full Details</p>
        </Link>
      </div>
    </div>
  );
};

export default CardPreview;
