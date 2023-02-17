import React from 'react'
import "./BeerBanner.scss"
import beerIcon from "../../assets/images/beerIcon.png";
import help from "../../assets/images/help.png";
const BeerBanner = ({beer, toggleHelp}) => {
  return (
    <section className="beer-banner">
        <div className="beer-banner__box">
          <img
            className="beer-banner__img"
            src={beerIcon}
            alt={beer.name}
            srcSet={beer.image_url}
          />
          ABV: {beer.abv} | pH: {beer.ph}
        </div>
        <div className="beer-banner__titles">
          <h1>{beer.name}</h1>
          <h3>First Brewed in {beer.first_brewed} </h3>
          <h3>{beer.tagline}</h3>
        </div>
        <div className="beer-banner__box">
          <img
            className="beer-banner__img"
            src={beerIcon}
            alt={beer.name}
            srcSet={beer.image_url}
          />
          <div className="beer-banner__units">
            <div className="beer-banner__units--info">
              EBC: {beer.ebc} | SRM: {beer.srm} | IBU: {beer.ibu}
            </div>
            <img
              className="beer-banner__units--help"
              src={help}
              alt="help"
              onClick={toggleHelp}
            />
          </div>
        </div>
      </section>
  )
}

export default BeerBanner