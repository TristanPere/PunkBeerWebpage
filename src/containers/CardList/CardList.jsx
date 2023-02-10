import React from "react";
import Card from "../../components/Card/Card";

import "./CardList.scss";
const Main = (props) => {
  const { beersArr, filter, pageNumber, resultsPerPage } = props;
  const beersArrClone = [...beersArr];

  let filteredArr = beersArrClone.filter((beer) => {
    const searchTerm = filter.name;
    return beer.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  filter.ABV
    ? (filteredArr = filteredArr.filter((beer) => {
        const searchTerm = 6;
        return beer.abv < searchTerm;
      }))
    : (filteredArr = filteredArr);

  filter.Classic
    ? (filteredArr = filteredArr.filter((beer) => {
        const searchTerm = 2010;
        return (
          Number(beer.first_brewed.slice(beer.first_brewed.length - 4)) <
          searchTerm
        );
      }))
    : (filteredArr = filteredArr);

  filter.Acidity
    ? (filteredArr = filteredArr.filter((beer) => {
        const searchTerm = 4;
        return beer.ph < searchTerm;
      }))
    : (filteredArr = filteredArr);

  const beerJSX = filteredArr.map((beer) => {
    return (
      <Card
        key={beer.id}
        imageStr={beer.image_url}
        name={beer.name}
        description={beer.description}
      />
    );
  });
  let start = resultsPerPage*(pageNumber);
  const sliceOfBeer = beerJSX.slice(start,start+(resultsPerPage))
  
  return <div className="card-container">{sliceOfBeer}</div>;
};

export default Main;
