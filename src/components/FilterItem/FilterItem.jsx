import React from 'react'
import './FilterItem.scss'
const FilterItem = (props) => {
  const {title, handleCheck, filterType} = props
  return (
    <label className='control' htmlFor='checkbox'>
      {title}
      <input type="checkbox" name="checkbox" id="checkbox" onClick={handleCheck} value={filterType} />
    </label>

  )
}

export default FilterItem