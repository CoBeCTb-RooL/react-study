import React, { useState } from "react";
import classes from './MyLoader.module.css'

const MyLoader = React.forwardRef((props, ref)=>{
    return (
        <div className={classes.myLoader}></div>
    )
})

export default MyLoader