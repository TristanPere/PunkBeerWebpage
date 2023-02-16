import React from 'react'
import Button from '../../components/Button/Button'
import "./PageButtonList.scss"
const PageButtonsList = ({handlePageNum,pageNumber,finalPage}) => {
  return(
    <div className='page-select'>
    Page Select: 
    <section className='page-select'>
    <Button buttonText={"<"} handleClick={handlePageNum}/>
    <div>Page: {pageNumber}/{finalPage}</div>
    <Button buttonText={">"} handleClick={handlePageNum}/>
    </section></div>
  )
}

export default PageButtonsList