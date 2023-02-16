import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./containers/Navbar/Navbar";

import BeerInfo from "./components/BeerInfo/BeerInfo";
import Main from "./containers/Main/Main";

import "./App.scss";
function App() {
  const filterTypeArr = ["ABV", "Classic", "Acidity"];
  const [allBeers, setAllBeers] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    ABV: false,
    Classic: false,
    Acidity: false,
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [finalPage, setFinalPage] = useState(17);
  const arrayLengthFishing = (activeArr) => {
    setFinalPage(Math.ceil(activeArr.length / resultsPerPage));
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
  const getAllBeers = async () => {
    let data = [];
    for (let i = 1; i < 6; i++) {
      let url = `https://api.punkapi.com/v2/beers?page=${i}&per_page=80`;
      if (filter.ABV) {
        url += `&abv_gt=6`;
      }
      if (filter.Classic) {
        url += `&brewed_before=01-2010`;
      }
      const res = await fetch(url);
      data[i - 1] = await res.json();
    }
    setAllBeers(data.flat(1));
  };
  const handlePageNum = (event) => {
    const result = event.target.value;
    if (pageNumber > 1 && pageNumber < finalPage) {
      result === "<"
        ? setPageNumber(Number(pageNumber) - 1)
        : setPageNumber(Number(pageNumber) + 1);
    } else if (pageNumber === finalPage) {
      setPageNumber(1);
    } else if (pageNumber === 1) {
      result === "<"
        ? setPageNumber(finalPage)
        : setPageNumber(Number(pageNumber) + 1);
    }
  };
  const handleResultsPerPage = (event) => {
    setPageNumber(1)
    setResultsPerPage(Number(event.target.value));
    setFinalPage(Number(Math.ceil(allBeers.length / event.target.value)));
  };
  useEffect(() => {
    getAllBeers();
  }, [filter]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div className="home">
                <Navbar
                  handleNameInput={handleNameInput}
                  handleCheck={handleCheck}
                  filterTypeArr={filterTypeArr}
                />
                <Main
                  beersArr={allBeers}
                  filter={filter}
                  pageNumber={pageNumber}
                  finalPage={finalPage}
                  resultsPerPage={resultsPerPage}
                  handlePageNum={handlePageNum}
                  handleResultsPerPage={handleResultsPerPage}
                  arrayLengthFishing={arrayLengthFishing}
                />
              </div>
            }
          ></Route>
          <Route
            path="/beer/:beerID"
            element={
              <div>
                <Link to="/"> All Beers </Link>
                <BeerInfo beersArr={allBeers} />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
