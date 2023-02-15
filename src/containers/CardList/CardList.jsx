import React from "react";
import Card from "../../components/Card/Card";

import "./CardList.scss";
const CardList = ({ beersArr, filter, pageNumber,  resultsPerPage,arrayLengthFishing }) => {
  let filteredArr = beersArr.filter((beer) =>
    beer.name.toLowerCase().includes(filter.name.toLowerCase())
  );
  if (filter.Acidity) {
    filteredArr = filteredArr.filter((beer) => beer.ph < 4);
  }
  const beerJSX = filteredArr.map((beer) => {
    return <Card key={beer.id} beer={beer} />;
  });
  arrayLengthFishing(beerJSX)
  const startNum = Number(pageNumber-1)*resultsPerPage
  const displayBeer = beerJSX.slice(startNum,(startNum+resultsPerPage))
  return <div className="card-container">{displayBeer}</div>;
};

export default CardList;
