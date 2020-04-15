import React from 'react';

const person = (props) => {
    // return <p>I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p onClick={props.click}>{props.children}</p>
        </div>    
    )
}

// class-based components - this.props
export default person;