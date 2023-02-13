import React from 'react'
import blackCross from "../../assets/images/black-cross.png"
import "./CardPreview.scss"
const CardPreview = ({ togglePreview }) => {
  return (
    <div className="card-preview">
      <div className="card-preview__content">
        <img
          src={blackCross}
          alt="Close menu"
          className="card-preview__cross"
          onClick={togglePreview}
        />
        <div className="card-preview__item"  onClick={togglePreview}>
          Home
        </div>
        <div className="card-preview__item" onClick={togglePreview}>
          All Albums
        </div>
        <div className="card-preview__item" onClick={togglePreview}>
          Rated Albums
        </div>
      </div>
    </div>
  )
}

export default CardPreview