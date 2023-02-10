import "./App.scss";
import { useState } from "react";
import beers from "./data/beer";
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
  const [pageNumber, setPageNumber] = useState(1)
  const [resultsPerPage, setResultsPerPage] = useState(20)
  const filterTypeArr = ["ABV", "Classic", "Acidity"];
  const handlePageNum = (event) =>{
    setPageNumber(event.target.value)
  }
  const handleResultsPerPage = (event) =>{
    setResultsPerPage(event.target.value)
  }
  const handleNameInput = (event) => {
    setFilter({
      name: event.target.value,
      ABV: filter.ABV,
      Classic: filter.Classic,
      Acidity: filter.Acidity,
    })
  };
  const handleCheck = (event) => {
    if (event.target.value == "ABV") {
      setFilter({
        name: filter.name,
        ABV: !filter.ABV,
        Classic: filter.Classic,
        Acidity: filter.Acidity,
      });
    } else if (event.target.value == "Classic") {
      setFilter({
        name: filter.name,
        ABV: filter.ABV,
        Classic: !filter.Classic,
        Acidity: filter.Acidity,
      })
    } else if (event.target.value == "Acidity") {
      setFilter({
        name: filter.name,
        ABV: filter.ABV,
        Classic: filter.Classic,
        Acidity: !filter.Acidity,
      })
    }
  };
  return (
    <div className="App">
      <Navbar
        handleNameInput={handleNameInput}
        handleCheck={handleCheck}
        filterTypeArr={filterTypeArr}
      />
      <CardList beersArr={allBeers} filter={filter} pageNumber={pageNumber} resultsPerPage={resultsPerPage} />
    </div>
  );
}

export default App;
