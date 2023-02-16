import React, { useState } from "react";
import "./BeerInfo.scss";
import { useParams } from "react-router-dom";
import help from "../../assets/images/help.png";
import { Link } from "react-router-dom";
import beerIcon from "../../assets/images/beerIcon.png";
import "./BeerInfo.scss";
import HelpButton from "../HelpButton/HelpButton";
const BeerInfo = ({ beersArr }) => {
  const { beerID } = useParams();
  const beer = beersArr.filter((beer) => beer.id == beerID)[0];
  const [showHelp, setShowHelp] = useState(false);
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };
  let ingredients = [[<p key={0}>Malt:</p>], [<p key={0}>Hops:</p>], [<p key={0}>Yeast:</p>]];
  let pairings = [];
  for (let i = 0; i < beer.ingredients.malt.length; i++) {
    ingredients[0][i + 1] = (
      <p key={i + 1}>
        {beer.ingredients.malt[i].name}: {beer.ingredients.malt[i].amount.value}{" "}
        {beer.ingredients.malt[i].amount.unit}
      </p>
    );
  }
  for (let i = 0; i < beer.ingredients.hops.length; i++) {
    ingredients[1][i + 1] = (
      <p key={i + 1}>
        {beer.ingredients.hops[i].name}: {beer.ingredients.hops[i].amount.value}{" "}
        {beer.ingredients.hops[i].amount.unit}
      </p>
    );
  }
  ingredients[2][1] = <p>{beer.ingredients.yeast}</p>;
  for (let i = 0; i < beer.food_pairing.length; i++) {
    pairings.push(beer.food_pairing[i]);
  }
  const lastFood = pairings.pop();
  const foodString = pairings.join(", ") + " and " + lastFood;
  return (
    <div className="container">
      <Link  to="/"><button className="homepage">All Beers</button></Link>
      <section className="beer-banner">
        <img
          className="beer-banner__img"
          src={beerIcon}
          alt={beer.name}
          srcSet={beer.image_url}
        />
        <div className="beer-banner__titles">
          <h1>{beer.name}</h1>
          <h3>First Brewed in {beer.first_brewed} </h3>
          <h3>{beer.tagline}</h3>
        </div>
        <img
          className="beer-banner__img"
          src={beerIcon}
          alt={beer.name}
          srcSet={beer.image_url}
        />
      </section>
      <section className="info-banner">
        <div className="infor-banner__ABV">
          ABV: {beer.abv} | pH: {beer.ph}
        </div>
        <div className="info-banner__units">
          <div className="info-banner__units--info">
            EBC: {beer.ebc} | SRM: {beer.srm} | IBU: {beer.ibu}
          </div>
          <img
            className="info-banner__units--help"
            src={help}
            onClick={toggleHelp}
          />
        </div>
      </section>
      <section className="beer-main">
        <div className="beer-main__description">{beer.description}</div>
        <div className="beer-main__pairing">Pairs well with {foodString}</div>
        <label>Ingredients:
        <div className="beer-main__ingredients">
      
          <div>{ingredients[0]}</div>
          <div>{ingredients[1]}</div>
          <div>{ingredients[2]}</div>
        </div></label>
      </section>
      {showHelp && <HelpButton toggleHelp={toggleHelp} />}
    </div>
  );
};

export default BeerInfo;
