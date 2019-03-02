import React from 'react';
import './Button.css';

function NumberButton (props) {
    console.log(props);
    return (
        <button onClick={props.handleClick} className={props.buttonStyle}>{props.text}</button>
    );
}

export default NumberButton;