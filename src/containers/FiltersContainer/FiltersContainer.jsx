import React from 'react'
import './FiltersContainer.scss'
import FilterItem from '../../components/FilterItem/FilterItem'
const FiltersContainer = (props) => {
  const {handleCheck, filterTypeArr} = props
  // [title, handleCheck, filterType]

  return (
    <div>
      <FilterItem title='High Alcohol (> 6.0%)' handleCheck={handleCheck} filterType={filterTypeArr[0]}/>
      <FilterItem title='Classic Range' handleCheck={handleCheck} filterType={filterTypeArr[1]}/>
      <FilterItem title='Acidic (pH < 4)' handleCheck={handleCheck} filterType={filterTypeArr[2]}/>
    </div>
  )
}

export default FiltersContainer