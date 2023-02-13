import React from "react";
import CardList from "../CardList/CardList";
import PageButtonsList from "../PageButtonList/PageButtonsList";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useState } from "react";
const Main = ({ beersArr, filter }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [maxPages, setMaxPages] = useState(13);
  const [arrayLength, setArrayLength] = useState(beersArr.length);
  const handleSetArrayLength = (array) => {
    setArrayLength(array.length);
    setMaxPages(Math.ceil(arrayLength / resultsPerPage));
  };
  const handlePageNum = (event) => {
    const result = event.target.value;
    if (pageNumber < maxPages && pageNumber > 1) {
      result == "<"
        ? setPageNumber(Number(pageNumber) - 1)
        : result == ">"
        ? setPageNumber(Number(pageNumber) + 1)
        : setPageNumber(result);
    } else if (pageNumber >= maxPages) {
      setPageNumber(1);
    } else if (pageNumber == 1) {
      result == "<"
        ? setPageNumber(1)
        : result == ">"
        ? setPageNumber(Number(pageNumber) + 1)
        : setPageNumber(result);
    }
  };
  const handleResultsPerPage = (event) => {
    setResultsPerPage(event.target.value);
    setMaxPages(Math.ceil(arrayLength / event.target.value));
  };
  return (
    <div>
      <PageButtonsList pageNumber={pageNumber} handlePageNum={handlePageNum} />
      <Dropdown handleResultsNum={handleResultsPerPage} />
      <p>Page: {pageNumber}</p>
      <CardList
        beersArr={beersArr}
        filter={filter}
        pageNumber={pageNumber}
        resultsPerPage={resultsPerPage}
        handleSetArrayLength={handleSetArrayLength}
      />
    </div>
  );
};

export default Main;
