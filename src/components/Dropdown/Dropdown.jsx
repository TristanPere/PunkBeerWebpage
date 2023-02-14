import React from 'react'

const Dropdown = ({handleResultsPerPage}) => {
    
  return (
    <label>Beers Per Page: 
    <select onChange={handleResultsPerPage}>
        <option>25</option>
        <option>45</option>
        <option>70</option>
        <option>100</option>
    </select></label>
  )
}

export default Dropdown