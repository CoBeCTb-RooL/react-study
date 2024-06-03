import React, { useState } from "react";
import classes from './MySelect.module.css'

const MySelect = ({options, defaultValue='-сортировка по-', value, onChange})=>{
    return (
        <select className={classes.mySelect} value={value} 
          onChange={event => onChange(event.target.value)}
        >
          <option value="" >{defaultValue}</option>
          {options.map(option => 
            <option value={option.value} key={option.value}>{option.name}</option>
          )}
        </select>
    )
}

export default MySelect
