class CounterApp extends React.Component {
    render(){
        return (
            <div>
                <Counter />
            </div>
        );
    }
}

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.onPlusOne = this.onPlusOne.bind(this);
        this.onMinusOne= this.onMinusOne.bind(this);
        this.OnClear = this.OnClear.bind(this);
        this.state = {
            count : 0
        };
    }
    onPlusOne(){
        console.log("plusOne");
        this.setState((prevState)=>{
            return {
                count : prevState.count + 1,
            };
        });
    }

    onMinusOne(){
        console.log("minusOne");
        this.setState((prevState)=>{
            prevState.count -= 1;
            return prevState;
        });
    }

    OnClear(){
        console.log("clear");
        this.setState(()=>{
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h3>Count : {this.state.count}</h3>
                <button onClick={this.onPlusOne}> +1 </button>
                <button onClick={this.onMinusOne}> -1 </button>
                <button onClick={this.OnClear}> Clear </button>
            </div>
        );
    }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'));