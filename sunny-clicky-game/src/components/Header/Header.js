import React from 'react';

const Header = props => (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-text" href="#" >Memory Game</a>
        <span className="navbar-text">
            Current Score: {props.current} <br/> High Score: {props.high}</span> 
    </nav>
);

export default Header