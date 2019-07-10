import React from 'react';

const Header = props => (
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-text" >Memory Game</a>
        <span class="navbar-text">
            Current Score: {props.current} <br/> High Score: {props.high}</span>
        
    </nav>
);

export default Header