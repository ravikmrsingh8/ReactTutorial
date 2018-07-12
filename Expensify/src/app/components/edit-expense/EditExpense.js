import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

export default class EditExpense extends React.Component{
    
    render= ()=> {
        console.log(this.props);
        return (
            <div>
                <h2>Edit Expense Page</h2>
                <b>Editing expense {this.props.match.params.id} </b>
            </div>
        );
    }
}