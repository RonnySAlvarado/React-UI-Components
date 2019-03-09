import React from 'react';
import './Header.css';

let date = new Date();
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let month = '';
for (let i = 0; i < monthList.length; i++){
    if (date.getMonth() === i+1){
        month = monthList[i+1];
    };
};

function HeaderTitle () {
    return (
        <div className="headerTitleContainer">
            <h2>Lambda School</h2>
            <h4>@LambdaSchool • {date.getDate()} {month}</h4>
        </div>
    );
};

export default HeaderTitle;