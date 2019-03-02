import React from 'react';
import './Button.css';
import CalculatorDisplay from "../DisplayComponents/CalculatorDisplay";

class NumberButton extends React.Component {
    constructor (props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // this.state = {
        //     num: this.props.text
        // }
    }

    handleClick (){
        console.log("Clicked!");
        return (
            <CalculatorDisplay num={this.props.text} />
        );
    };

    render (){
        return (
            <button onClick={this.handleClick} className={this.props.buttonStyle}>{this.props.text}</button>
        );
    }
}

export default NumberButton;



// function NumberButton (props) {
//     return (
//         <button className={props.buttonStyle}>{props.text}</button>
//     );
// };
