import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

console.log("Loading Header");
//Stateless functional Component
const Header = (props)=>(
        <div className="header">
            <div className="container">
                <h2 className="header__title">{props.title}</h2>
                <h3 className="header__subtitle">{props.subtitle}</h3>
            </div>
        </div>
    );

Header.defaultProps = {
    title: "Some Title",
    subtitle: "Some Subtitle"
};

export default Header;


/**
 * 
 */

