import React from "react";
import Card from "../../components/Card/Card";

import "./CardList.scss";
const CardList = (props) => {
  const { beersArr, filter, pageNumber, resultsPerPage, handleSetArrayLength} = props;
  const beersArrClone = [...beersArr];

  let filteredArr = beersArrClone.filter((beer) => beer.name.toLowerCase().includes(filter.name.toLowerCase()));
  filter.ABV
    ? (filteredArr = filteredArr.filter((beer) => beer.abv < 6))
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
  handleSetArrayLength(filteredArr)
  let start = resultsPerPage * (pageNumber - 1);
  let displayedBeers = beerJSX.slice(start, start + resultsPerPage);
  if(displayedBeers.length === 0){ displayedBeers = "No Results"}
  return <div className="card-container">{displayedBeers}</div>;
};

export default CardList;
