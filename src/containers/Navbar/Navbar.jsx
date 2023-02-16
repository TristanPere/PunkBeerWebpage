import React from "react";
import "./Navbar.scss";
import FiltersContainer from "../FiltersContainer/FiltersContainer";

const Navbar = (props) => {
  const { handleNameInput, handleCheck, filterTypeArr } = props;
  return (
    <div className="Navbar">
      <h1>PunkBeer API Search Site</h1>
        <input type="text" className="Navbar__search" id="beer-search" onChange={handleNameInput} placeholder="Search Beers..."/>
      <FiltersContainer
        handleCheck={handleCheck}
        filterTypeArr={filterTypeArr}
      />
    </div>
  );
};

export default Navbar;
