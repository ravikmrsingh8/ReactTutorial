
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
