import React from 'react';
import './Button.css';

function ActionButton (props) {
    return (
        <button onClick={props.handleClick} className={props.buttonStyle}>{props.text}</button>
    );
};

export default ActionButton;
