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
    console.log('expense Reducer called');
    switch(action.type) {
        case "ADD_EXPENSE" : 
            console.log("Adding expense");
            return [...state, action.expense];
        case "DELETE_EXPENSE" :
            console.log("Deleting expense with id" , action.expense.uuid);
            return state.filter((expense)=>expense.uuid != action.expense.uuid);

        case "EDIT_EXPENSE" :
            
            return state.map((expense)=>{
                if(expense.uuid ==  action.expense.uuid) {
                    console.log("Editing expense with id" + action.expense.uuid);
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



export default expenseReducer;