import React from 'react';
import './Button.css';
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";


function ActionAndNumberButton (props) {
    return (
        <div className="ActionAndNumberContainer">
            <ActionButton clear={props.clear} buttonStyle='btn wide' text='clear' />
            <NumberButton numInput={props.numInput} buttonStyle='btn red' text='÷' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='7' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='8' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='9' />
            <NumberButton numInput={props.numInput} buttonStyle='btn red' text='×' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='4' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='5' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='6' />
            <NumberButton numInput={props.numInput} buttonStyle='btn red' text='−' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='1' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='2' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='3' />
            <NumberButton numInput={props.numInput} buttonStyle='btn red' text='+' />
            <ActionButton numInput={props.numInput} buttonStyle='btn wide' text='0' />
            <NumberButton numInput={props.numInput} buttonStyle='btn red' text='=' />
        </div>
    );
};

export default ActionAndNumberButton;