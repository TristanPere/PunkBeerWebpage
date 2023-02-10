import React from "react";
import "./Navbar.scss";
import FiltersContainer from "../FiltersContainer/FiltersContainer";
const Navbar = (props) => {
  const { handleNameInput, handleCheck, filterTypeArr} = props;
  return (
    <div className="Navbar">
      <input type="text" name="" id="" onChange={handleNameInput} />
      <FiltersContainer handleCheck={handleCheck} filterTypeArr={filterTypeArr}/>
    </div>
  );
};

export default Navbar;
