import React from 'react';

console.log("Loading Option");
const Option = (props)=>{
    return (
        <div><li>{props.optionText}</li></div>
    );
}

export default Option;