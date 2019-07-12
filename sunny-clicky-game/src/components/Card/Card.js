
import React from 'react';
import './Card.css'


const Card = props => (
    <div className="container">
        <div className="card mb-4" >
            <div className="card-body">
                <p className="card-text"></p>
                <img alt={props.id} src={props.image} id={props.id} clicked={props.clicked} onClick={() => props.onClick(props.id)}></img>
            </div>
        </div>
    </div>
);

export default Card