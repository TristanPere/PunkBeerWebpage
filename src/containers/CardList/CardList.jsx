import React from "react";
import Card from "../../components/Card/Card";

import "./CardList.scss";
const CardList = (props) => {
  const { beersArr, filter} = props;
  const beersArrClone = [...beersArr];

  let filteredArr = beersArrClone.filter((beer) => beer.name.toLowerCase().includes(filter.name.toLowerCase()));
  filter.ABV
    ? (filteredArr = filteredArr.filter((beer) => beer.abv > 6))
    : (filteredArr = filteredArr);

  filter.Classic
    ? (filteredArr = filteredArr.filter(
        (beer) => beer.first_brewed.slice(beer.first_brewed.length - 4) < 2010
      ))
    : (filteredArr = filteredArr);

  filter.Acidity
    ? (filteredArr = filteredArr.filter((beer) => beer.ph < 4))
    : (filteredArr = filteredArr);
  
  const beerJSX = filteredArr.map((beer) => {
    return <Card key={beer.id} beer={beer} />;
  });
  let showBeer = true
  if(beerJSX.length === 0){ showBeer = false }
  return <div className="card-container">{showBeer && beerJSX}</div>;
};

export default CardList;
