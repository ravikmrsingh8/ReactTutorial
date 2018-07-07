

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.onPlusOne = this.onPlusOne.bind(this);
        this.onMinusOne= this.onMinusOne.bind(this);
        this.OnClear = this.OnClear.bind(this);
        this.state = {
            count : this.props.count
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component Updated")
        if(prevState.count != this.state.count){
            const json = JSON.stringify(this.state);
            console.log(json);
            localStorage.setItem("state", json);
        }
    }

    componentDidMount(){
        try{
            const state = JSON.parse(localStorage.getItem("state"));
            console.log(state);
            if(state){
                this.setState(()=>({
                    count:state.count
                }));
            }
            
        }catch(error ){

        }
        console.log("<Counter /> mounted")
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

//Default Props

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={3} />, document.getElementById('app'));