import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Switch} from 'react-router-dom'

import AddExpense from '../components/add-expense/AddExpense';
import EditExpense from '../components/edit-expense/EditExpense';
import ExpenseDashboard from '../components/expense-dashboard/ExpenseDashboard';
import Help from '../components/help/Help';
import Header from '../components/header/Header';
import PageNotFound from '../components/page-not-found/PageNotFound';



const AppRouter =()=> (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashboard}/>
                <Route path="/addExpense" exact={true} component={AddExpense}/>
                <Route path="/editExpense/:id"  component={EditExpense}/>
                <Route path="/help" exact={true} component={Help}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
        
    </BrowserRouter>
);


export default AppRouter;