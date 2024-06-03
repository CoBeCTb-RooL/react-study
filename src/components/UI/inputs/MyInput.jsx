import React, { useState } from "react";
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref)=>{
  // console.log(classes)
    return (
        <input {...props} ref={ref} className={classes.myInput} />
    )
})

export default MyInput
