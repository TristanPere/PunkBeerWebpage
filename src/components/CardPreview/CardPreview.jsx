import React from "react";
import exitCross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";
import beerIcon from "../../assets/images/beerIcon.png"
import "./CardPreview.scss";
const CardPreview = ({ togglePreview, beer }) => {
  let pairings = []
for (let i = 0; i<beer.food_pairing.length; i++){
    pairings.push(beer.food_pairing[i])
  }
  const lastFood = pairings.pop()
  const foodString = pairings.join(", ") + " and " + lastFood
  return (
    <div className="beer-preview">
      <div className="beer-preview__content">
        <img
          src={exitCross}
          alt="Close menu"
          className="beer-preview__cross"
          onClick={togglePreview}
        />
        <div className="beer-preview__beer">
          <div className="beer-preview__beer--name" onClick={togglePreview}>
            {beer.name}
          </div>
          <p className="beer-preview__beer--info">
            ABV: {beer.abv} | pH: {beer.ph}
          </p>
        </div>
        <img
          className="beer-preview__image"
          src={beerIcon}
          alt={beer.name}
          srcSet={beer.image_url}
        />
        <p className="beer-preview__description">{beer.description}</p>
        <p className="beer-preview__pairings">Food Pairings: {foodString}</p>
        <Link to={`/beer/${beer.id}`} className="beer-preview__link">
          <button className="beer-preview__link__button">Full Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CardPreview;
