"use strict";
import React from "react";
import ReactDOM from "reactDOM";

export default class TempComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Bud" };
  }

  render() {
    return(
    <div>
      <h2> Welcome Back{this.name}</h2>
      <button> Download?</button>
    </div>
      );
  }
}
const domContainer = document.querySelector('#root');
ReactDOM.render(<TempComp />, domContainer);


//ReactDOM.render(<TempComp />, document.getElementById("root"));