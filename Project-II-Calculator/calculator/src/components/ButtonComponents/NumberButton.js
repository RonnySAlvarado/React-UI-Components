import React from 'react';
import './Button.css';

function NumberButton (props) {
    return (
        <button value={Number(props.text)} onClick={props.numInput} className={props.buttonStyle}>{props.text}</button>
    );
}

export default NumberButton;