import React from 'react';
import './Display.css';
import NumberButton from "../ButtonComponents/NumberButton";

function CalculatorDisplay (props) {
    return (
        <React.Fragment>
            <h1 className='calculatorDisplay'>{props.num}</h1>
        </React.Fragment>
    );
}

export default CalculatorDisplay;