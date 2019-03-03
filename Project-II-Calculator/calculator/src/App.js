import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionAndNumberButton from './components/ButtonComponents/ActionAndNumberButton';

class App extends React.Component {
  state = {
    num: 0
  }

  numInput = (event) => {
    if (this.state.num === 0) {this.setState({num: event.target.value})}
    else {this.setState( {num: `${this.state.num}${event.target.value}`} );}
  }

  add = (event) => {

  }

  subtract = (event) => {

  }

  multiply = (event) => {

  }

  divide = (event) => {

  }

  calculate = (event) => {

  }

  clear = (event) => {

  }

  render (){
    return (
      <div className="container">
        <CalculatorDisplay num={this.state.num}/>
        <ActionAndNumberButton numInput={this.numInput}/>
      </div>
    );
  }
};

export default App;
