import React from 'react';

console.log("Loading MakeDecisionAction");
const MakeDecisionAction = (props)=>(
        <div>
            <button id="makeDecisionButton" disabled={!props.hasOptions} onClick={props.onMakeDecision}>What should i do?</button>
        </div>
    );

export default MakeDecisionAction;