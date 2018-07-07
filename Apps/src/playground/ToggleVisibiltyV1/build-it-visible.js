let textVisible = false;

const onToggleVisibility = (e)=>{
    textVisible = !textVisible;
    renderApp();
}

const getDetailedText = ()=>{
    if(textVisible){
        return <p>Detailed explanation of some thing which i doesn't care</p>;
    }
}

const appRoot = document.getElementById('app');
const renderApp = ()=>{
    const template = (
        <div>
            <h2>Visibility App</h2>
            <button id="visibilityToggleButton" onClick={onToggleVisibility}>{textVisible ? "Show" : "Hide"}</button>
            {getDetailedText()}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();