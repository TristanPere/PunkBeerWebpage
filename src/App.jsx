import "./App.scss";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import allBeers from "./data/allBeers";
import Navbar from "./containers/Navbar/Navbar";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import Main from "./containers/Main/Main";

function App() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();
    console.log(data)
    setBeers(data);
  };
  useEffect(() => {
    getBeers();
    console.log(beers);
  }, []);

  const filterTypeArr = ["ABV", "Classic", "Acidity"];
  const [filter, setFilter] = useState({
    name: "",
    ABV: false,
    Classic: false,
    Acidity: false,
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(25);
  const [maxPages, setMaxPages] = useState(13);
  const [arrayLength, setArrayLength] = useState(allBeers.length);
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
  const handleNameInput = (event) => {
    setFilter({
      name: event.target.value,
      ABV: filter.ABV,
      Classic: filter.Classic,
      Acidity: filter.Acidity,
    });
  };
  const handleCheck = (event) => {
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
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar
                  handleNameInput={handleNameInput}
                  handleCheck={handleCheck}
                  filterTypeArr={filterTypeArr}
                />
                <Main
                  beersArr={allBeers}
                  filter={filter}
                  pageNumber={pageNumber}
                  resultsPerPage={resultsPerPage}
                  handleSetArrayLength={handleSetArrayLength}
                  handlePageNum={handlePageNum}
                  handleResultsPerPage={handleResultsPerPage}
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
