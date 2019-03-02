import React from 'react';
import './Display.css';
import NumberButton from "../ButtonComponents/NumberButton";

class CalculatorDisplay extends React.Component {
        state = {
            num: 0
        }

    handleClick = () => {
        console.log("Clicked!");  
    }

    render (){
        <NumberButton handleClick={this.handleClick} />
        return (
            <React.Fragment>
                <h1 className='calculatorDisplay'>{this.state.num}</h1>
            </React.Fragment>
        );
    }
}

export default CalculatorDisplay;