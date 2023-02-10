import React from 'react'

const Dropdown = (props) => {
    const {handleResultsNum} = props
  return (
    <label>Beers Per Page: 
    <select onChange={handleResultsNum}>
        <option>25</option>
        <option>45</option>
        <option>70</option>
        <option>100</option>
    </select></label>
  )
}

export default Dropdown