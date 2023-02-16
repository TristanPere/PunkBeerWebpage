import React from "react";
import "./FilterItem.scss";
const FilterItem = (props) => {
  const { title, handleCheck, filterType } = props;
  return (
    <label className="checkbox" htmlFor="checkbox">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onClick={handleCheck}
        value={filterType}
      />
      {title}
    </label>
  );
};

export default FilterItem;
