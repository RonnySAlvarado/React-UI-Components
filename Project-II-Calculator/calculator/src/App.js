import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionAndNumberButton from './components/ButtonComponents/ActionAndNumberButton';

class App extends React.Component {
  state = {
    num: 0,
    num2: 0,
    add: false,
    subtract: false,
    multiply: false,
    divide: false
  }

  numInput = (event) => {
    if (this.state.num === 0) {this.setState({num: event.target.value})}
    else {this.setState( {num: `${this.state.num}${event.target.value}`} );}
  }

  add = () => {
    this.setState ({ add: true, num: 0, num2: this.state.num})
  }

  subtract = () => {
    this.setState ({ subtract: true, num: 0, num2: this.state.num})
  }

  multiply = () => {
    this.setState ({ multiply: true, num: 0, num2: this.state.num})
  }

  divide = () => {
    this.setState ({ divide: true, num: 0, num2: this.state.num})
  }

  calculate = () => {
    if (this.state.add === true) {this.setState ({num: Number(this.state.num2) + Number(this.state.num), num2: 0, add: false})}
    else if (this.state.subtract === true) {this.setState ({num: this.state.num2 - this.state.num, num2: 0, subtract: false})}
    else if (this.state.multiply === true) {this.setState ({num: this.state.num2 * this.state.num, num2: 0, multiply: false})}
    else if (this.state.divide === true) {this.setState ({num: (this.state.num2 / this.state.num).toFixed(7), num2: 0, divide: false})}
  }

  clear = () => {
    this.setState ( { num: 0, num1: 0, num2: 0})
  }

  render (){
    return (
      <div className="container">
        <CalculatorDisplay num={this.state.num}/>
        <ActionAndNumberButton 
                              numInput={this.numInput}
                              clear={this.clear}
                              add={this.add}
                              subtract={this.subtract}
                              multiply={this.multiply}
                              divide={this.divide}
                              calculate={this.calculate}
        />
      </div>
    );
  }
};

export default App;
