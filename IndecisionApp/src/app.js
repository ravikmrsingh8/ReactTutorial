class IndecisionApp extends React.Component {
    
    render() {
        const title = "Indecsion App";
        const subtitle = "Put your life in the hands of a Computer";
        const options = ["Thing 1", "Thing 2", "Thing 3"];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action /><RemoveAllOptionsAction options={options}/>
                <Options options={options}/>
                <OptionInput />
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

class Action extends React.Component {
    onMakeDecision(){
        alert("Pick One")
    }

    render() {
        return (
            <div>
                <button id="makeDecisionButton" onClick={this.onMakeDecision}>What should i do?</button>
            </div>
        );
    }
}

class RemoveAllOptionsAction extends React.Component {
    constructor(props){
        super(props);
        this.onRemoveAllOptions = this.onRemoveAllOptions.bind(this);

    }
    onRemoveAllOptions() {
        this.props.options.length = 0;
        alert("All removed");
    }

    render(){
        return (
            <div><button id= "removeAllButton" onClick={this.onRemoveAllOptions}>Remove All</button></div>
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
    onAddOption(e){
        e.preventDefault();
        console.log("form submitted with " + e.target.elements.option.value);
        
        const option = e.target.elements.option.value.trim();
        if(option) {
            //push into options list
            
        }
        e.target.elements.option.value = '';
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