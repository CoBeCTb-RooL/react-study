import React, { useState } from "react";

export class ClassCounter extends React.Component{

  constructor(props){
    super(props);
    // console.log(props)
    this.state = {
      count: parseInt(props.startNumber ?? 0)
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment(){
    this.setState({count: this.state.count +1})
  }
    
  decrement(){
    this.setState({count: this.state.count-1})
  }

  render(){
    return (
      <div className="component-wrapper" >
          <h1>{this.state.count}</h1>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}