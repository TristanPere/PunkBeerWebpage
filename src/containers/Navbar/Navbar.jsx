import React from "react";
import "./Navbar.scss";
import FiltersContainer from "../FiltersContainer/FiltersContainer";
import PageButtonsList from "../PageButtonList/PageButtonsList";
import Dropdown from "../../components/Dropdown/Dropdown";
const Navbar = (props) => {
  const { handleNameInput, handleCheck, filterTypeArr, pageNumber, handlePageNum, handleResultsPerPage} = props;
  return (
    <div className="Navbar">
      <input type="text" name="" id="" onChange={handleNameInput} />
      <FiltersContainer handleCheck={handleCheck} filterTypeArr={filterTypeArr}/>
      <PageButtonsList pageNumber={pageNumber} handlePageNum={handlePageNum}/>
      <Dropdown handleResultsNum={handleResultsPerPage}/>
    </div>
  );
};

export default Navbar;
