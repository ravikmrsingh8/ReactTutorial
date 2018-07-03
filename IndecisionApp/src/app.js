console.log("App Works!")
/****
 * 
 * Indecsion App
 */
const app = {
    title : "Indecision App!",
    subtitle : "Put Your life in hands of a Computer ",
    options: ["one", "two"]
}

const onAddOption = (e) => {
    e.preventDefault();
    
    let option = e.target.elements.option.value.trim();
    if(option){
        console.log("Form submitted with option "+ option);
        app.options.push(option);
        e.target.elements.option.value= '';
        renderIndecisionApp();
    } 
}

const onResetOptions = (e) => {
    app.options.length = 0;
    renderIndecisionApp();
}

const getToDoList = ()=> app.options.map(e=><li key={e}>{e}</li>);
const onMakeDecision = ()=>{
    if(app.options.length) {
        const randomIndex = Math.floor(Math.random() * app.options.length);
        alert(app.options[randomIndex]);
    }
}
const indecisionApp = document.getElementById('indecision-app');
const renderIndecisionApp = ()=>{
    const template = (
        <div>
            <h2>{app.title} </h2>
            {app.subtitle && <p> {app.subtitle}</p>}
           
            <p>{(app.options && app.options.length > 0) ? "Here are your Options" : "No Options Available"}</p>
            
            <button disabled={!app.options.length} id="makeDecisionButton" onClick={onMakeDecision}>What should i do?</button>
            <button id="resetOptionsButton" onClick={onResetOptions}> Reset </button>
            <ol>{getToDoList()}</ol>
            <form onSubmit={onAddOption}>
                <input type="text" name="option"></input>
                <button id="addOptionButton">Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template,indecisionApp);
}

renderIndecisionApp();

/**
 * 
 * Playgound
 */
const user = {
    name: "Ravi Singh",
    age: 26,
    location: "Philadelphia"
};

function getLocation(user){
    if(user.location) return <p>Location : {user.location} </p>;
}

const templateTwo = (
    <div>
        <h2>{user.name ? user.name : "Anonymous"}</h2>
        {user.age >= 18 && <p>Age : {user.age}</p>}
        {getLocation(user)}
        
    </div>
);


/**
 * 
 * Counter App 
 */

let count = 0;
const plusOne = ()=>{
    console.log("plus One");
    count++;
    renderCounter();    
};
const minusOne = ()=>{
    console.log("minus One");
    if(count)count--;
    renderCounter();
};

const reset = ()=>{
    console.log("reset");
    count = 0;
    renderCounter();
};


const counterAppRoot = document.getElementById("counter-app");
const renderCounter = ()=>{
    const counterTemplate = (
        <div>
            <h2>Count : {count}</h2>
            <button id="plusOne" className="button" onClick={plusOne}> +1 </button>
            <button id="minusOne" className="button" onClick={minusOne}> -1 </button>
            <button id="reset" className="button" onClick={reset}> clear </button>
            
        </div>
    );
    ReactDOM.render(counterTemplate, counterAppRoot);
} 


renderCounter();
