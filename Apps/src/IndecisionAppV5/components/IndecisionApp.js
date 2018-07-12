import React from 'react';
import Header from './Header';
import MakeDecisionAction from './MakeDecisionAction';
import ResetOptionsAction from './ResetOptionsAction';
import Options from './Options';
import OptionInput from './OptionInput';
import OptionModal from './OptionModal';

console.log("Loading IndecisionApp");
export default class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption: undefined
    };

    onResetOptions= ()=>{
        console.log("Reset called");
        this.setState(()=>({options: []}));
    };
    

    onAddOption = (option)=>{
        if(!option) return "Empty string not allowed";
        if(this.state.options.indexOf(option) != -1) return "Option already exist!";


        this.setState((prevState)=>{
            const options = prevState.options.concat(option);
            console.log(options)
            return {
                options
            };
        });
    };

    onMakeDecision= ()=> {
        const toDoIndex  = Math.floor(Math.random() * this.state.options.length);
        //alert(this.state.options[toDoIndex])
        this.setState(()=>({
            selectedOption : this.state.options[toDoIndex]
        }));
    };

    onCloseModal= ()=>{
        this.setState(()=>({
            selectedOption: undefined
        }));
    };


    isChanged(prevState){
        const oldOptions = prevState.options;
        const curOptions = this.state.options;

        
        if(oldOptions.length != curOptions.length) return true;
        for(let i=0;i<oldOptions.length;i++){
            if(oldOptions[i] != curOptions[i]) {
                return true;
            }
        }
        return false;
    };



    componentDidMount(){

        try{
            const state = JSON.parse(localStorage.getItem('state'));
            
            if(state.options) {
                this.setState(()=>({
                    options : state.options
                }));
            }
            console.log("<IndecisionApp /> mounted");
        }catch(error){

        }
    }

    componentDidUpdate(prevProps, prevState,snapshot ) {
        console.log("<IndecisionAPp /> Updated")
        if(this.isChanged(prevState)) {
            const json = JSON.stringify({options: this.state.options});
            localStorage.setItem("state", json)
        }    
    }


    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a Computer";
        return (
            <div>
                <Header  title={title} subtitle={subtitle}/>
                <div className="container">
                    <MakeDecisionAction onMakeDecision={this.onMakeDecision} hasOptions={this.state.options.length > 0}/>
                    <ResetOptionsAction onResetOptions={this.onResetOptions}/>
                    <Options options={this.state.options}/>
                    <OptionInput onAddOption={this.onAddOption}/>
                    <OptionModal selectedOption={this.state.selectedOption} onCloseModal={this.onCloseModal}/>
                </div>
            </div>
        );
    };

}
