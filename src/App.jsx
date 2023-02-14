import "./App.scss";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import allBeers from "./data/allBeers";
import Navbar from "./containers/Navbar/Navbar";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import Main from "./containers/Main/Main";

function App() {
  const filterTypeArr = ["ABV", "Classic", "Acidity"];
  const [filter, setFilter] = useState({
    name: "",
    ABV: false,
    Classic: false,
    Acidity: false,
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [arrayLength, setArrayLength] = useState(allBeers.length);
  const handleSetArrayLength = (array) => {
    setArrayLength(array.length);
  };
  const handlePageNum = (event) => {
    const result = event.target.value;
    if (beers.length!=0 && pageNumber > 1) {
      result == "<"
        ? setPageNumber(Number(pageNumber) - 1)
        : result == ">"
        ? setPageNumber(Number(pageNumber) + 1)
        : setPageNumber(result);
    } else if (beers.length==0) {
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
  const [beers, setBeers] = useState([]);

  const getBeers = async (pageNumber, resultsPerPage) => {
    let url = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${resultsPerPage}`
    const res = await fetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${resultsPerPage}`);
    const data = await res.json();
    console.log(data)
    setBeers(data);
  };
  useEffect(() => {
    getBeers(pageNumber, resultsPerPage);
    console.log(beers);
  }, [pageNumber, resultsPerPage]);
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
                  beersArr={beers}
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
                <BeerInfo beersArr={beers} />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
