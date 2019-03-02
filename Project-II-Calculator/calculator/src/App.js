import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionAndNumberButton from './components/ButtonComponents/ActionAndNumberButton';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <ActionAndNumberButton />
    </div>
  );
};

export default App;
