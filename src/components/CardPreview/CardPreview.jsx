import React from 'react'
import blackCross from "../../assets/images/black-cross.png"
import { Link } from 'react-router-dom'
import "./CardPreview.scss"
const CardPreview = ({ togglePreview, beer }) => {
  return (
    <div className="card-preview" >
      <div className="card-preview__content">
        <img
          src={blackCross}
          alt="Close menu"
          className="card-preview__cross"
          onClick={togglePreview}
        />
        <Link to={`/beer/${beer.id}`} key={beer.id}>
        <div className="card-preview__item"  onClick={togglePreview}>
          {beer.name}
        </div></Link>
      </div>
    </div>
  )
}

export default CardPreview