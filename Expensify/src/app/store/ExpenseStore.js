import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


//ACTION GENERATORS


//ADD_EXPENSE
const addExpense = ( { 
    description='',
    note= '',
    amount= 0,
    createdAt = 0
    }={})=> ({
        type: "ADD_EXPENSE",
        
        expense: {
            uuid: uuid(),
            description,
            note,
            amount,
            createdAt
        }
});

//DELETE_EXPENSE
const deleteExpense = ({uuid})=>({
  type:"DELETE_EXPENSE",
  expense: {
      uuid
  }   
});

//EDIT_EXPENSE
const editExpense = ({uuid}, updates)=>({
    type: "EDIT_EXPENSE",
    expense: {       
        ...updates,
        uuid
    }
});

const defaultExpenseState = [];
const expenseReducer =(state= defaultExpenseState, action)=> { 
    //console.log('expense Reducer called');
    switch(action.type) {
        case "ADD_EXPENSE" : 
            //console.log("Adding expense");
            return [...state, action.expense];
        case "DELETE_EXPENSE" :
            //console.log("Deleting expense with id" , action.expense.uuid);
            return state.filter((expense)=>expense.uuid != action.expense.uuid);

        case "EDIT_EXPENSE" :
            
            return state.map((expense)=>{
                if(expense.uuid ==  action.expense.uuid) {
                    //console.log("Editing expense with id" + action.expense.uuid);
                    expense = {
                        ...expense,
                        ...action.expense
                    }
                }
                return expense;
                
            });
            
        default:
            return state;
    }

};



//ACTION GENERATORS

//FILTER_BY_START_DATE_END_DATE
const filterByDate = ({startDate=undefined, endDate=undefined})=>({
    type: "FILTER_BY_DATE",
    filter: {
        startDate,
        endDate
    }
});

//FILETR_BY_TEXT

const filterByText = (text)=>({
    type: "FILTER_BY_TEXT",
    filter: {
        text
    }
});

//FILTER_BY_AMOUNT
const filterByAmount = (amount)=>({
    type: "FILTER_BY_AMOUNT",
    filter: {
        amount
    }
});



const defaultFilterState = {
    text: undefined,
    startDate: undefined,
    endDate: undefined,
    amount: 0
};

const filterReducer = (state = defaultFilterState, action)=>{
    //console.log('Filter Reducer called');
    switch(action.type){
        case "FILTER_BY_DATE": 
            return {...state, ...action.filter};
        case "FILTER_BY_TEXT":
            return {...state, ...action.filter};
        case "FILTER_BY_AMOUNT":
            return {...state, ...action.filter};

        default:
            return state;
    }

};

//ACTION GENERATORS

const sortBy =(field='createdAt')=>({
    type: "SORT",
    sortBy: {
        field: field
    }
});

const defaultSortReducer = {field: 'createdAt'}; 
const sortReducer = (state=defaultSortReducer, action)=>{
   // console.log('Sort Reducer called');
    
    return {...state, ...action.sortBy};
};


const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
    sort: sortReducer,
}));




console.log(store.getState());

const sortExpenses = (expenses, sortBy) =>{
    return expenses.sort((e1, e2)=>{
        return e1[sortBy] < e2[sortBy]? -1 : 1;
    });
};

const filterExpenses = (expenses, {text, startDate, endDate, amount})=> {
    return expenses.filter((expense)=>{
        return (text ? foundMatch(expense, text) :true)
            && (startDate ? startDate <= expense.createdAt : true)
            && (endDate ? endDate >= expense.cretaedAt : true)
            && (amount ? expense.amount > amount : true)
    });


    function foundMatch(expense, text){
        const found = expense.description.toLowerCase().indexOf(text.toLowerCase()) != -1 || expense.note.toLowerCase().indexOf(text.toLowerCase()) != -1;
        return found;
    }
};

const copyOf = (arr)=>arr.map(e=>e);

store.subscribe(()=>{
    //console.log("from subscription");
    //console.log(store.getState());
    //console.log(store.getState())
    //console.log(store.getState())
    const expenses = copyOf(store.getState().expenses);
    const filters = store.getState().filters;
    const sortBy = store.getState().sort.field;
   
    const visibleExpenses = sortExpenses(filterExpenses(expenses, filters), sortBy); 
    console.log(visibleExpenses);
})



//returns actionObject
const expenseAction1 = store.dispatch(addExpense({
    description: "January Rent",
    note: "Rent for January 2018",
    amount: 54500,
    createdAt: 300,
}));


const expenseAction2 = store.dispatch(addExpense({
    description: "Februaray Rent",
    note: "Rent for february 2018",
    amount: 54500,
    createdAt: 1000,
}));


const expenseAction3= store.dispatch(addExpense({
    description: "Coffee",
    note: "Coffee from starbuck",
    amount: 14500,
    createdAt: 100,
}));


const expenseAction4= store.dispatch(addExpense({
    description: "Tea",
    note: "Chai Wala",
    amount: 1500,
    createdAt: 600,
}));


//console.log(expenseAction3);

const deleteAction5 = store.dispatch(deleteExpense(expenseAction3.expense));
const editAction6 = store.dispatch(editExpense(expenseAction1.expense, {description:"Rent for March", note:"I didn't pay rent of March"}))

const filterAction7 = store.dispatch(filterByText('rent'));


const filterAction8 = store.dispatch(filterByAmount(15999));


const sortAction9 = store.dispatch(sortBy('amount'));

const sortAction10 = store.dispatch(sortBy('description'));

const sortAction11 = store.dispatch(sortBy('createdAt'));


const expenseState = {
    expenses: [{
        id: 1221312,
        description: 'January Rent',
        note: 'This was the final year rent ',
        amount: 54500,
        createdAt: undefined,
    }],

    filters : {
        text:'rent',
        amount: 0,
        startDate: undefined,
        endDate: undefined,
    },

    sort: {
        field: 'createdAt',
    }
} ;