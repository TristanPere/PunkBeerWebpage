import React from 'react'
import "./BeerInfo.scss"
import { useParams } from "react-router-dom";
const BeerInfo = ({beersArr}) => {
    const {beerID} = useParams();
    const beer = beersArr.filter((beer)=> beer.id == beerID)[0]
  return (
    <div>{beer.name}</div>
  )
}

export default BeerInfo