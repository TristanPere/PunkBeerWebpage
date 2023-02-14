import { useState } from "react";
import React from "react";
import "./Card.scss";
import CardPreview from "../CardPreview/CardPreview";
import { Link } from "react-router-dom";
const Card = ({beer}) => {
  const firstSentence = beer.description?.slice(0, beer.description.indexOf(".") + 1);
  const [showText, setShowText] = useState(true)
  const [showPreview, setShowPreview] = useState(false)
  const handleMouseOver = () => {
    setShowText(false);
  };
  const handleMouseOut = () =>{
    setShowText(true);
  }
  const togglePreview = () =>{
    setShowPreview(!showPreview)
  }
  const standardCard = (
    <div className="beerCard beerCard--standard" onClick={togglePreview}>
      <img className="beerCard__image" src={beer.image_url} alt={beer.name} />
      <h1 className="beerCard__title">{beer.name}</h1>
      <p className="beerCard__tagline">{beer.tagline}</p>
      <p className="beerCard__abv">ABV: {beer.abv}</p>
    </div>
  );
  const overlayCard = (
    <div className='beerCard beerCard--overlay'>
        <img className='beerCard--overlay__image'src={beer.image_url} alt={beer.name} />
        <h1 className='beerCard--overlay__title'>{beer.name}</h1>
        <p className="beerCard--overlay__tagline">{beer.tagline}</p>
        <p className='beerCard--overlay__description'>{firstSentence}</p>
        <p className="beerCard--overlay__abv">ABV: {beer.abv}</p>
        <div className="beerCard--overlay__links">
          <p onClick={togglePreview}>Quick Preview|</p>
          <Link to={`/beer/${beer.id}`}>
        <p>
          Full Details
        </p></Link>
        </div>
        
    </div>
  )
  return <div className='conatiner' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    {showPreview && <CardPreview togglePreview={togglePreview} beer={beer}/>}
    {showText ? standardCard : overlayCard}
    </div>
};

export default Card;
