import React from 'react';
import './Button.css';
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";


function ActionAndNumberButton (props) {
    return (
        <div className="ActionAndNumberContainer">
            <ActionButton clear={props.clear} buttonStyle='btn wide' text='clear' />
            <ActionButton divide={props.divide} buttonStyle='btn red' text='÷' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='7' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='8' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='9' />
            <ActionButton multiply={props.multiply} buttonStyle='btn red' text='×' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='4' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='5' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='6' />
            <ActionButton subtract={props.subtract} buttonStyle='btn red' text='−' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='1' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='2' />
            <NumberButton numInput={props.numInput} buttonStyle='btn' text='3' />
            <ActionButton add={props.add} buttonStyle='btn red' text='+' />
            <NumberButton numInput={props.numInput} buttonStyle='btn wide' text='0' />
            <ActionButton calculate={props.calculate} buttonStyle='btn red' text='=' />
        </div>
    );
};

export default ActionAndNumberButton;