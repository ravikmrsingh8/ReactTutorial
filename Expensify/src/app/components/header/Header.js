import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom'; 
import './styles.scss';
export default class Header extends React.Component {
    render = () =>(
        <header>
            <h2>Expensify</h2>
            
            <NavLink activeClassName="active" exact={true} to="/"> Dashboard </NavLink> 
            <NavLink activeClassName="active" to="/editExpense"> Edit Expenses </NavLink> 
            <NavLink activeClassName="active" to="/addExpense"> Add Expenses </NavLink>
            <NavLink activeClassName="active" to="/help"> Help </NavLink> 
        </header>
    );
}