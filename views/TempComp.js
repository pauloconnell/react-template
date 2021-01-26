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
      <h2> Welcome Back</h2>
      <button> Download?</button>
    </div>
      );
  }
}
