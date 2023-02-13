import "./App.scss";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import allBeers from "./data/allBeers";
import Navbar from "./containers/Navbar/Navbar";
import CardList from "./containers/CardList/CardList";

function App() {
  const [filter, setFilter] = useState({
    name: "",
    ABV: false,
    Classic: false,
    Acidity: false,
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [maxPages, setMaxPages] = useState(13);
  const filterTypeArr = ["ABV", "Classic", "Acidity"];
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
  console.log(pageNumber);
  const handleResultsPerPage = (event) => {
    setResultsPerPage(event.target.value);
    setMaxPages(Math.ceil(allBeers.length / event.target.value));
  };
  const handleNameInput = (event) => {
    setPageNumber(1);
    setFilter({
      name: event.target.value,
      ABV: filter.ABV,
      Classic: filter.Classic,
      Acidity: filter.Acidity,
    });
  };
  const handleCheck = (event) => {
    setPageNumber(1);
    if (event.target.value === "ABV") {
      setFilter({
        name: filter.name,
        ABV: !filter.ABV,
        Classic: filter.Classic,
        Acidity: filter.Acidity,
      });
    } else if (event.target.value === "Classic") {
      setFilter({
        name: filter.name,
        ABV: filter.ABV,
        Classic: !filter.Classic,
        Acidity: filter.Acidity,
      });
    } else if (event.target.value === "Acidity") {
      setFilter({
        name: filter.name,
        ABV: filter.ABV,
        Classic: filter.Classic,
        Acidity: !filter.Acidity,
      });
    }
  };
  return (
    <div className="App">
      <Navbar
        handleNameInput={handleNameInput}
        handleCheck={handleCheck}
        filterTypeArr={filterTypeArr}
        handlePageNum={handlePageNum}
        pageNumber={pageNumber}
        handleResultsPerPage={handleResultsPerPage}
      />
      <CardList
        beersArr={allBeers}
        filter={filter}
        pageNumber={pageNumber}
        resultsPerPage={resultsPerPage}
      />
    </div>
  );
}

export default App;
