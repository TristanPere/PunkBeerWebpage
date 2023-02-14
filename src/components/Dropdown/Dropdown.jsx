import React from 'react'

const Dropdown = ({handleResultsPerPage}) => {
    
  return (
    <label>Beers Per Page: 
    <select onChange={handleResultsPerPage}>
        <option>20</option>
        <option>40</option>
        <option>60</option>
        <option>80</option>
    </select></label>
  )
}

export default Dropdown