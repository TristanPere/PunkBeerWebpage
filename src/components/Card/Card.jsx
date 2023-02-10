import React from 'react'
import Button from '../Button/Button'
import './Card.scss'
const Card = (props) => {
    const {imageStr, name, description} = props
    const firstSentence = description?.slice(0,  description.indexOf(".") + 1)
    const handleClick = () => {
      // setShowText(!showText);
    };
  return (
    <div className='beerCard'>
        <img className='beerCard__image'src={imageStr} alt={name} />
        <h1 className='beerCard__title'>{name}</h1>
        <p className='beerCard__description'>{firstSentence}</p>
        <Button handleClick={handleClick} buttonText={"Find Out More"}/>
    </div>
  )
}

export default Card