'use strict';
import React from 'React';
import ReactDOM from 'ReactDOM'
import PropTypes from 'prop-types';


export default class WelcomeBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: 'Bud',
      text: 'No Click yet',
      visible: true
    };
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
      
    });
  }
  visibility(state){
    this.setState(state=>({
      visible: !state.visible
    }))
  }


render() {
    
    
    return(
    <div>
      
    <h2> Welcome Back</h2>
      <button onClick={this.handlCLick}> Download?</button>
        <button onClick={this.visibility}>Show more?</button>
      <FunctionalComp />  
      <Camper />
      </div>
      )
  }
}

//functional Component Camper

const Camper = props => <p>{props.name}</p>;

Camper.defaultProps = {
  name: "CamperBot"
};

Camper.propTypes ={
  name: PropTypes.string.isRequired
}

 