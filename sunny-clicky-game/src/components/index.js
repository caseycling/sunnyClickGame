import React from "react";

function DisplayCharacters(props) {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Hello, world!</h1>
                <p>I'm a jumbotron!</p>
                <p>
                    <button className="btn btn-primary btn-lg">Learn more</button>
                </p>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <p className="card-text">Card content</p>
                    <img alt={props.name} src={props.image}/>
                </div>
            </div>
        </div>

    );
}

export default DisplayCharacters
