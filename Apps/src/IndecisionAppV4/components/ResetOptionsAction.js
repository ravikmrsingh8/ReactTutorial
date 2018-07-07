import React from 'react';

console.log("Loading ResetOptionsAction");
const ResetOptionsAction = (props)=>{
    return (
        <div><button id= "resetOptionButton" onClick={props.onResetOptions}>Reset </button></div>
    );
};

export default ResetOptionsAction;
