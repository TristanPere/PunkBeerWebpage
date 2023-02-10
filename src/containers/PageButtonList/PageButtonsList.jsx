import React from 'react'
import Button from '../../components/Button/Button'

const PageButtonsList = (props) => {
    const {pageNumber, handlePageNum} = props
  return(
    <label>Page Select:
    <section>
    <Button buttonText={"<"} handleClick={handlePageNum}/>
    <Button buttonText={Number(pageNumber)} handleClick={handlePageNum}/>
    <Button buttonText={Number(pageNumber)+1} handleClick={handlePageNum}/>
    <Button buttonText={Number(pageNumber)+2} handleClick={handlePageNum}/>
    <Button buttonText={">"} handleClick={handlePageNum}/>
    </section></label>
  )
}

export default PageButtonsList