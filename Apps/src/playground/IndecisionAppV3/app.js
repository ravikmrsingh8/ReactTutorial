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



//Stateless functional Component
const Header = (props)=>{
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
        </div>
    );
}

Header.defaultProps = {
    title: "Some Title",
    subtitle: "Some Subtitle"
}

//Stateless functional Component
const MakeDecisionAction = (props)=>{
    return (
        <div>
            <button id="makeDecisionButton" disabled={!props.hasOptions} onClick={props.onMakeDecision}>What should i do?</button>
        </div>
    );
}


//Stateless functional Component
const ResetOptionsAction = (props)=>{
    return (
        <div><button id= "resetOptionButton" onClick={props.onResetOptions}>Reset </button></div>
    );
}

//Stateless functional Component
const Options = (props)=>{
    return (
        <div><ol>{props.options.map((option)=> <Option key={option} optionText={option}/>)}</ol></div>
    );
}

//Stateless functional Component
const Option = (props)=>{
        return (
            <div><li>{props.optionText}</li></div>
        );
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));