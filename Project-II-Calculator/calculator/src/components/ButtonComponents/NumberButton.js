import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
    constructor (){
        super();
    }

    render (){
        return (
            <button className={this.props.buttonStyle}>{this.props.text}</button>
        );
    }
}

export default NumberButton;



// function NumberButton (props) {
//     return (
//         <button className={props.buttonStyle}>{props.text}</button>
//     );
// };
