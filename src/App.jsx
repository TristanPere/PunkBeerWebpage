import "./App.scss";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import allBeers from "./data/allBeers";
import Navbar from "./containers/Navbar/Navbar";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import Main from "./containers/Main/Main";

function App() {
  const [filter, setFilter] = useState({
    name: "",
    ABV: false,
    Classic: false,
    Acidity: false,
  });
  
  const filterTypeArr = ["ABV", "Classic", "Acidity"];

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
        <Link to="/"> Home </Link>
        <Navbar
          handleNameInput={handleNameInput}
          handleCheck={handleCheck}
          filterTypeArr={filterTypeArr}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                beersArr={allBeers}
                filter={filter}
              />
            }
          ></Route>
          <Route path="/beer/:beerID" element={<BeerInfo beersArr={allBeers}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
