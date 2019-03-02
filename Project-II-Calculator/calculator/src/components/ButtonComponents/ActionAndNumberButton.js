import React from 'react';
import './Button.css';
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";

class ActionAndNumberButton extends React.Component {
    constructor (){
        super();
    }
    render (){
        return (
            <div className="ActionAndNumberContainer">
                <ActionButton buttonStyle='btn wide' text='clear' />
                <NumberButton buttonStyle='btn red' text='÷' />
                <NumberButton buttonStyle='btn' text='7' />
                <NumberButton buttonStyle='btn' text='8' />
                <NumberButton buttonStyle='btn' text='9' />
                <NumberButton buttonStyle='btn red' text='×' />
                <NumberButton buttonStyle='btn' text='4' />
                <NumberButton buttonStyle='btn' text='5' />
                <NumberButton buttonStyle='btn' text='6' />
                <NumberButton buttonStyle='btn red' text='−' />
                <NumberButton buttonStyle='btn' text='1' />
                <NumberButton buttonStyle='btn' text='2' />
                <NumberButton buttonStyle='btn' text='3' />
                <NumberButton buttonStyle='btn red' text='+' />
                <ActionButton buttonStyle='btn wide' text='0' />
                <NumberButton buttonStyle='btn red' text='=' />
            </div>
        );
    }
}

export default ActionAndNumberButton;



// function ActionAndNumberButton () {
//     return (
//         <div className="ActionAndNumberContainer">
//             <ActionButton buttonStyle='btn wide' text='clear' />
//             <NumberButton buttonStyle='btn red' text='÷' />
//             <NumberButton buttonStyle='btn' text='7' />
//             <NumberButton buttonStyle='btn' text='8' />
//             <NumberButton buttonStyle='btn' text='9' />
//             <NumberButton buttonStyle='btn red' text='×' />
//             <NumberButton buttonStyle='btn' text='4' />
//             <NumberButton buttonStyle='btn' text='5' />
//             <NumberButton buttonStyle='btn' text='6' />
//             <NumberButton buttonStyle='btn red' text='−' />
//             <NumberButton buttonStyle='btn' text='1' />
//             <NumberButton buttonStyle='btn' text='2' />
//             <NumberButton buttonStyle='btn' text='3' />
//             <NumberButton buttonStyle='btn red' text='+' />
//             <ActionButton buttonStyle='btn wide' text='0' />
//             <NumberButton buttonStyle='btn red' text='=' />
//         </div>
//     );
// };