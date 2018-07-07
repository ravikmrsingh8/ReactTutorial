import React from 'react';
import Option from './Option';

console.log("Loading Options");
const Options = (props)=>{
    return (
        <div><ol>{props.options.map((option)=> <Option key={option} optionText={option}/>)}</ol></div>
    );
}

export default Options;