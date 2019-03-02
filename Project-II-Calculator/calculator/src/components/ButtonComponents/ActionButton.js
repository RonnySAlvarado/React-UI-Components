import React from 'react';
import './Button.css';

class ActionButton extends React.Component {
    constructor (props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (){
        console.log("Also clicked!");
    }

    render (){
        return (
            <button onClick={this.handleClick} className={this.props.buttonStyle}>{this.props.text}</button>
        );
    }
}

export default ActionButton;



// function ActionButton (props) {
//     return (
//         <button className={props.buttonStyle}>{props.text}</button>
//     );
// };
