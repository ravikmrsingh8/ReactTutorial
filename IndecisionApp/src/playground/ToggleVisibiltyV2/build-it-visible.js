class VisibiltyTogglerApp extends React.Component {
    render(){
        return (
            <div> <VisibiltyToggler /> </div>
        );
    }
}
class VisibiltyToggler extends React.Component {
    constructor(props){
        super(props);
        this.onToggleVisibilty = this.onToggleVisibilty.bind(this);
        
        this.state = {
            visible : false
        };
    }

    onToggleVisibilty(){
        this.setState((prevState)=>{
            return {
                visible : !prevState.visible
            };
        });
    }

    getDetailedText(){
        if(this.state.visible) {
            return (
                <p>Some detailed Info , and I Don't care whatever it is!</p>
            );
        }
    }
    render(){
        return (
            <div>
                <h2>Visibilty Toggler</h2>
                <button onClick = {this.onToggleVisibilty}>{this.state.visible ? "Hide ": "Show"}</button>
                {this.getDetailedText()}
            </div>
        );
    }
}


ReactDOM.render(<VisibiltyTogglerApp />, document.getElementById('app'));