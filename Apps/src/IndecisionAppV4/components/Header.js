import React from 'react';

console.log("Loading Header");
//Stateless functional Component
const Header = (props)=>{
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
        </div>
    );
};

Header.defaultProps = {
    title: "Some Title",
    subtitle: "Some Subtitle"
};

export default Header;