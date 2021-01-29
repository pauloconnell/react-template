"use strict";
import React from "react";
import ReactDOM from "reactDOM";

const FunctionalComp = (props)=>{
  
  
  
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{props.name}</h1>
      </div>
  
  
};

export default FunctionalComp;
ReactDOM.render(<FunctionalComp />, document.getElementById("like_button_container"));