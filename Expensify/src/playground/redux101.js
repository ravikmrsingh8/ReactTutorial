import {createStore} from 'redux';



const actionMap = {
    "INCREMENT" : increment,
    "DECREMENT" : decrement,
    "RESET" : reset,
}

const store = createStore((state = {
    count:0
}, action)=>{
    if(actionMap[action.type]) {
        return actionMap[action.type](state);
    }
    return state;
}) ;



function increment(state){
    return {
        count : state.count + 1
    }
}

function decrement(state) {
    return {
        count : state.count - 1
    }
}

function reset() {
    return {
        count : 0
    }
}


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});
//type property is needed for Acton Objects 
store.dispatch({
    type:"INCREMENT"
});

store.dispatch({
    type:"INCREMENT"
});


store.dispatch({
    type:"INCREMENT"
});


store.dispatch({
    type:"DECREMENT"
});

unsubscribe();

store.dispatch({
    type:"RESET"
});




