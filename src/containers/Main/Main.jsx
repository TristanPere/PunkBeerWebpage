import React from "react";
import CardList from "../CardList/CardList";
import PageButtonsList from "../../components/PageButtonList/PageButtonsList";
import Dropdown from "../../components/Dropdown/Dropdown";
import "./Main.scss";
const Main = ({
  beersArr,
  filter,
  resultsPerPage,
  handleResultsPerPage,
  pageNumber,
  handlePageNum,
  finalPage,
  arrayLengthFishing
}) => {
  return (
    <div className="main">
      <div className="pagedetails">
        <div className="pagedetails__arrows">
          <PageButtonsList
            pageNumber={pageNumber}
            finalPage={finalPage}
            handlePageNum={handlePageNum}
          />
        </div>
        <Dropdown className="pagedetails__dropdown" handleResultsPerPage={handleResultsPerPage} />
      </div>
      <CardList
        beersArr={beersArr}
        filter={filter}
        pageNumber={pageNumber}
        resultsPerPage={resultsPerPage}
        arrayLengthFishing={arrayLengthFishing}
      />
      <div className="pagedetails--end">
        <PageButtonsList
          pageNumber={pageNumber}
          finalPage={finalPage}
          handlePageNum={handlePageNum}
        />
      </div>
    </div>
  );
};

export default Main;
