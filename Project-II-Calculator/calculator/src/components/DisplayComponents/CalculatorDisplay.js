import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
    constructor (){
        super();
    }

    render (){
        return (
            <React.Fragment>
                <h1 className='calculatorDisplay'>0</h1>
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
