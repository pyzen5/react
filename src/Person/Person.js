import React from 'react';
import './Person.css'

const person = (props) => {
    // return <p>I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
        <div className="Person">
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />

        </div>    
    )
}

// class-based components - this.props
export default person;