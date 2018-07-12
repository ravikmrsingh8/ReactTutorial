import React from 'react';

console.log("Loading OptionInput");
export default class OptionInput extends React.Component {
    state = {
        error:undefined
    }
    
    onAddOption = (e)=>{
        e.preventDefault();
        console.log("form submitted with "+ e.target.elements.option.value);
        const option = e.target.elements.option.value.trim();
        const error = this.props.onAddOption(option);
        if(error) {
            alert(error);
            console.log(error);
        }
        
        e.target.elements.option.value ='';
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onAddOption}>
                    <input type="text" name = "option"></input>
                    <button id="addOptionButton">Add Option</button>
                </form>
                
            </div>
        );
    }
}