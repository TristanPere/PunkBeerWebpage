import { useState } from "react";
import React from "react";
import Button from "../Button/Button";
import "./Card.scss";
import CardPreview from "../CardPreview/CardPreview";
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
    <div className="beerCard beerCard--standard">
      <img className="beerCard__image" src={beer.image_url} alt={beer.name} />
      <h1 className="beerCard__title">{beer.name}</h1>
      <p className="beerCard__description">{firstSentence}</p>
    </div>
  );
  const overlayCard = (
    <div className='beerCard beerCard--overlay' onClick={togglePreview}>
        <img className='beerCard__image'src={beer.image_url} alt={beer.name} />
        <h1 className='beerCard__title'>test</h1>
        <p className='beerCard__description'>{firstSentence}</p>
        
    </div>
  )
  return <div className='conatiner' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    {showPreview && <CardPreview togglePreview={togglePreview} beer={beer}/>}
    {showText ? standardCard : overlayCard}
    </div>
};

export default Card;
