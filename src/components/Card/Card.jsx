import { useState } from "react";
import React from "react";
import Button from "../Button/Button";
import "./Card.scss";
import CardPreview from "../CardPreview/CardPreview";
const Card = ({ imageStr, name, description }) => {
  const firstSentence = description?.slice(0, description.indexOf(".") + 1);
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
      <img className="beerCard__image" src={imageStr} alt={name} />
      <h1 className="beerCard__title">{name}</h1>
      <p className="beerCard__description">{firstSentence}</p>
    </div>
  );
  const overlayCard = (
    <div className='beerCard beerCard--overlay' onClick={togglePreview}>
        <img className='beerCard__image'src={imageStr} alt={name} />
        <h1 className='beerCard__title'>test</h1>
        <p className='beerCard__description'>{firstSentence}</p>
        
    </div>
  )
  return <div className='conatiner' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    {showPreview && <CardPreview togglePreview={togglePreview}/>}
    {showText ? standardCard : overlayCard}
    </div>
};

export default Card;
