import React, { useState } from "react";

const Counter = (props)=>{
    const [count, setCount] = useState(parseInt(props.defaultNumber)  || 0)

    function increment(){
        setCount(count+1)
      }
    
      function decrement(){
        setCount(count-1)
      }

    return (
        <div className="component-wrapper">
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            &nbsp;
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter
