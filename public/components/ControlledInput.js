import React from "react";
import ReactDOM from "react-dom";

export default class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    // Change in inputBox sets value of input
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // When submit is clicked, set submit value
    event.preventDefault();
    this.setState({
      submit: this.state.input
    })
 
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // if input is greater than 15, change color of inputBox border to RED
    if(this.state.input.length>15){
       inputStyle.border='3px solid red';
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
        <input style={inputStyle} value={this.state.input} onChange={this.handleChange}></input>
          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
      
    );
  }
}
ReactDOM.render(<ControlledInput  />, document.getElementById("input"));