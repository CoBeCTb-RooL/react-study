import React, { useState } from "react";
import classes from './MyPages.module.css'
import { countPages } from "../../../lib/helpers";

const MyPages = ({totalPagesCount, currentPage, callback})=>{
  let pagesArr = []
  for(let i=1; i<=totalPagesCount; i++){
    pagesArr.push(i)
  }
  // console.log(classes)
  return (
    <div className='pages__wrapper'>
    {pagesArr.map(p => 
      <span 
        onClick={()=>callback(p)}
        key={p} 
        className={currentPage===p ? 'pages__page pages__page_current' : 'pages__page'}
      >
        {p}
      </span>
    )}
    </div>
  )
}

export default MyPages
