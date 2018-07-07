import React from 'react';
import Header from './Header';
import MakeDecisionAction from './MakeDecisionAction';
import ResetOptionsAction from './ResetOptionsAction';
import Options from './Options';
import OptionInput from './OptionInput';

console.log("Loading IndecisionApp");
export default class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.onResetOptions = this.onResetOptions.bind(this);
        this.onAddOption = this.onAddOption.bind(this);
        this.onMakeDecision = this.onMakeDecision.bind(this);

        this.state = {
            options : []
        }
    }

    onResetOptions(){
        console.log("Reset called");
        this.setState(()=>({options: []}));
    }
    

    onAddOption(option){
        if(!option) return "Empty string not allowed";
        if(this.state.options.indexOf(option) != -1) return "Option already exist!";


        this.setState((prevState)=>{
            const options = prevState.options.concat(option);
            console.log(options)
            return {
                options
            };
        });
    }

    onMakeDecision(){
        const toDoIndex  = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[toDoIndex])
    }

    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a Computer";
        return (
            <div>
                <Header  title={title} subtitle={subtitle}/>
                <MakeDecisionAction onMakeDecision={this.onMakeDecision} hasOptions={this.state.options.length > 0}/>
                <ResetOptionsAction onResetOptions={this.onResetOptions}/>
                <Options options={this.state.options}/>
                <OptionInput onAddOption={this.onAddOption}/>
            </div>
        );
    }

}
