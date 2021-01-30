import React from "react";
import ReactDOM from "reactDOM";

class PropsAndState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  // Change code above this line
  handleEnter() {
    this.setState(state => ({
      message: state.message + "You pressed the enter key! "
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    } else {
      this.setState(state => {
        message: state.message + String.fromCharCode(event.keyCode);
      });
    }
  }
  render() {
    // define some buttons to reder conditionally based on props/state
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    // terinary opperator with multiple render options:
    return (
      <div>
        <h1>Say please? {this.state.message}</h1>
        {this.state.message === ""
          ? buttonThree
          : this.state.message == "please"
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}

export default PropsAndState;
ReactDOM.render(
  <PropsAndState />,
  document.getElementById("like_button_container")
);
