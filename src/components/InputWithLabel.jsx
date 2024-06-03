import React, { useState } from "react";

export const InputWithLabel = (props)=>{
    const [value, setValue] = useState('bla bla!')

    return (
      <div className="component-wrapper">
        <h2>{value}</h2>
        <input type="text" value={value} onChange={event=>setValue(event.target.value)}/>
      </div>
    )
}

// export default Counter
