import React from 'react';
import './Button.css';
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";


function ActionAndNumberButton (props) {
    console.log(props);
    return (
        <div className="ActionAndNumberContainer">
            <ActionButton handleClick={props.handleClick} buttonStyle='btn wide' text='clear' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn red' text='÷' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn' text='7' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn' text='8' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn' text='9' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn red' text='×' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn' text='4' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn' text='5' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn' text='6' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn red' text='−' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn' text='1' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn' text='2' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn' text='3' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn red' text='+' />
            <ActionButton handleClick={props.handleClick} buttonStyle='btn wide' text='0' />
            <NumberButton handleClick={props.handleClick} buttonStyle='btn red' text='=' />
        </div>
    );
};

export default ActionAndNumberButton;