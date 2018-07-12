import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {Link} from 'react-router-dom';

export default class PageNotFound extends React.Component {
    render = ()=>(
        <div className="text-wrapper">
            <div className="title" data-content="404">
                404
            </div>
    
            <div className="subtitle">
                Oops, the page you're looking for doesn't exist.
            </div>
    
            <div className="buttons">
                <Link  className="button" to="/">Go to homepage</Link>
            </div>
        </div>
    );
}