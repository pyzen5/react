import React from 'react';

const person = (props) => {
    // return <p>I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old!</p>
    return <p>I'm a {props.name} and I am {props.age} years old!</p>
}

// class-based components - this.props
export default person;