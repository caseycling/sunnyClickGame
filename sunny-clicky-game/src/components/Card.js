import React from 'react'

const Card = props => (
    
    <div className = "card mb-4" >
        <div className="card-body">
            <p className="card-text">{props.name}{props.id}{props.src}{props.clicked}</p>
            <img alt={props.id} src={props.image} id={props.id} clicked={props.clicked}></img>
        </div>
    </div>
);

export default Card