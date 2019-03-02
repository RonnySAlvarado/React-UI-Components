import React from 'react';
import './Button.css';

class ActionButton extends React.Component {
    constructor (){
        super();
    }

    render (){
        return (
            <button className={this.props.buttonStyle}>{this.props.text}</button>
            );
    }
}

export default ActionButton;



// function ActionButton (props) {
//     return (
//         <button className={props.buttonStyle}>{props.text}</button>
//     );
// };
