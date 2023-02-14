import React, { useState } from "react";
import "./BeerInfo.scss";
import { useParams } from "react-router-dom";
import help from "../../assets/images/help.png";
import "./BeerInfo.scss";
import HelpButton from "../HelpButton/HelpButton";
const BeerInfo = ({ beersArr }) => {
  const { beerID } = useParams();
  const beer = beersArr.filter((beer) => beer.id == beerID)[0];
  const [showHelp, setShowHelp] = useState(false)
  const toggleHelp = () =>{
    setShowHelp(!showHelp)
  }
  let ingredients = [[<p key={0}>Malt:</p>], [<p key={0}>Hops:</p>], []];
  
  for (let i = 0; i < beer.ingredients.malt.length; i++) {
    ingredients[0][i + 1] = (
      <p key={i+1}> 
        {beer.ingredients.malt[i].name}: {beer.ingredients.malt[i].amount.value}{" "}
        {beer.ingredients.malt[i].amount.unit}
      </p>
    );
  }
  for (let i = 0; i < beer.ingredients.hops.length; i++) {
    ingredients[1][i + 1] = (
      <p key={i+1}> 
        {beer.ingredients.hops[i].name}: {beer.ingredients.hops[i].amount.value}{" "}
        {beer.ingredients.hops[i].amount.unit}
      </p>
    );
  }
  ingredients[2][0] = <p key={0}>Yeast: {beer.ingredients.yeast}</p>;

  return (
    <div className="container">
      <section className="beer-banner">
        <img className="beer-banner__img" src={beer.image_url} />
        <div>
          <div>{beer.name}</div>
          <p>First Brewed in {beer.first_brewed} </p>
          <p>{beer.tagline}</p>
        </div>
        <img className="beer-banner__img" src={beer.image_url} />
      </section>
      <section className="info-banner">
        <div className="infor-banner__ABV">
          ABV: {beer.abv} | pH: {beer.ph}
        </div>
        <div className="info-banner__units">
          <p>
            EBC: {beer.ebc} | SRM: {beer.srm} | IBU: {beer.ibu}
          </p>
          <img src={help} onClick={toggleHelp} />
        </div>
      </section>
      <section className="beer-main">
        <div className="beer-main__description">{beer.description}</div>
        <div className="beer-main__pairing">
          Pairs well with {beer.food_pairing[0]}, {beer.food_pairing[1]} and{" "}
          {beer.food_pairing[2]}
        </div>
        <div className="beer-main__ingredients"> {ingredients}</div>
      </section>
      {showHelp && <HelpButton toggleHelp={toggleHelp}/>}
    </div>
  );
};

export default BeerInfo;
