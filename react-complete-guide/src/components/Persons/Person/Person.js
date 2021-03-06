import React from 'react';
import clasess from './Person.css';

const person = (props) => {
    console.log("[Person.js] rendering..."); 
    return (
        <div className={clasess.Person}>
            <p onClick={props.clicked}>I'm a {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;