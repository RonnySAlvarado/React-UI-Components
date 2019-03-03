import React from 'react';
import './Button.css';

function ActionButton (props) {
    if (props.text === '+') {return <button onClick={props.add} className={props.buttonStyle}>{props.text}</button>}
    else if (props.text === '−') {return <button onClick={props.subtract} className={props.buttonStyle}>{props.text}</button>}
    else if (props.text === '×') {return <button onClick={props.multiply} className={props.buttonStyle}>{props.text}</button>}
    else if (props.text === '÷') {return <button onClick={props.divide} className={props.buttonStyle}>{props.text}</button>}
    else if (props.text==='=') {return <button onClick={props.calculate} className={props.buttonStyle}>{props.text}</button>}
    else if (props.text==="clear") {return <button onClick={props.clear} className={props.buttonStyle}>{props.text}</button>}
};
export default ActionButton;
