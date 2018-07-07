class IndecisionApp extends React.Component {
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
        this.setState(()=>{
            return {
                options: []
            };
        });
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
                <Header title={title} subtitle={subtitle} />
                <MakeDecisionAction onMakeDecision={this.onMakeDecision} hasOptions={this.state.options.length > 0}/>
                <ResetOptionsAction onResetOptions={this.onResetOptions}/>
                <Options options={this.state.options}/>
                <OptionInput onAddOption={this.onAddOption}/>
            </div>
        );
    }

}
class Header extends React.Component {
    render(){
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h3>{this.props.subtitle}</h3>
            </div>
        );
    }
}

class MakeDecisionAction extends React.Component {
    
    render() {
        return (
            <div>
                <button id="makeDecisionButton" disabled={!this.props.hasOptions} onClick={this.props.onMakeDecision}>What should i do?</button>
            </div>
        );
    }
}

class ResetOptionsAction extends React.Component {
    constructor(props){
        super(props);
    }
 
    render(){
        return (
            <div><button id= "resetOptionButton" onClick={this.props.onResetOptions}>Reset </button></div>
        );
    }
}


class Options extends React.Component {
    
    render() {
        return (
            <div><ol>{this.getOptions()}</ol></div>
        );
    }

    getOptions(){
        return this.props.options.map((option)=> <Option key={option} optionText={option}/>);
    }
}

class Option  extends React.Component{
    render() {
        return (
            <div><li>{this.props.optionText}</li></div>
        );
    }
        
}

class OptionInput extends React.Component {
    constructor(props){
        super(props);
        this.onAddOption = this.onAddOption.bind(this);
        this.state = {
            error:undefined
        }
    }

    onAddOption(e){
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));