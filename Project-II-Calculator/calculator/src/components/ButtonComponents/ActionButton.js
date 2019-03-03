import React from 'react';
import './Button.css';

function ActionButton (props) {
    return (
        <button value={props.text} onClick={props.numInput} className={props.buttonStyle}>{props.text}</button>
    );
};

export default ActionButton;
