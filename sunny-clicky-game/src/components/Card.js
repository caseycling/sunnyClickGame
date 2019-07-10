import React from 'react'

let Card = props => (
    
    <div className = "card mb-4" >
        <div className="card-body">
            <p className="card-text">Card content</p>
            <img alt={props.name} src={props.src} id={props.id} cliked={props.clicked}/>
        </div>
    </div>
);

export default Card