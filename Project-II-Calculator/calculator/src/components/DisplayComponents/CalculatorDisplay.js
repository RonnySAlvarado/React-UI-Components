import React from 'react';
import './Display.css';
import ActionAndNumberButton from "../ButtonComponents/ActionAndNumberButton";

class CalculatorDisplay extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            num: 0
        }
    }

    render (){
        return (
            <React.Fragment>
                <h1 className='calculatorDisplay'>{this.state.num}</h1>
            </React.Fragment>
        );
    }
}

export default CalculatorDisplay;


// function CalculatorDisplay (props) {
//     return (
//         <React.Fragment>
//             <h1 className='calculatorDisplay'>0</h1>
//         </React.Fragment>
//     );
// };
