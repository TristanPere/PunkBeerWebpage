import React from "react";
import CardList from "../CardList/CardList";
import PageButtonsList from "../PageButtonList/PageButtonsList";
import Dropdown from "../../components/Dropdown/Dropdown";
import "./Main.scss";
const Main = ({
  beersArr,
  filter,
  handleResultsPerPage,
  pageNumber,
  resultsPerPage,
  handleSetArrayLength,
  handlePageNum,
}) => {
  return (
    <div>
      <div className="page-details">
        <div className="page-details__buttons">
          <PageButtonsList
            pageNumber={pageNumber}
            handlePageNum={handlePageNum}
          />
        </div>
        <Dropdown handleResultsPerPage={handleResultsPerPage} />
      </div>
      <CardList
        beersArr={beersArr}
        filter={filter}
        pageNumber={pageNumber}
        resultsPerPage={resultsPerPage}
        handleSetArrayLength={handleSetArrayLength}
      />
      <div className="page-details">
        <PageButtonsList
          pageNumber={pageNumber}
          handlePageNum={handlePageNum}
        />
      </div>
    </div>
  );
};

export default Main;
