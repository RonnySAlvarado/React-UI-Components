import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionAndNumberButton from './components/ButtonComponents/ActionAndNumberButton';

class App extends React.Component {
  state = {
    num: 0
  }

  handleClick = () => {
  console.log("Clicked!");  
  }

  render (){
    return (
      <div className="container">
        <CalculatorDisplay num={this.state.num}/>
        <ActionAndNumberButton handleClick={this.handleClick}/>
      </div>
    );
  }
};

export default App;
