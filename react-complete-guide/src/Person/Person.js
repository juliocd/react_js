import React, {} from 'react';
import clasess from './Person.css';
// import styled from 'styled-components'

// const StyleDiv = styled.div`
//     width: 60%;
//     border: 1px solid #fff000;
//     box-shadow: 0 2px 3px #aaa998;
//     padding: 10px;
//     text-align: center;
//     margin: 16px;

//     @media (min-width: 800px){
//         width: 450px;
//     }
// `;

const person = (props) => {
    // return <p>I'm a {props.name} and I'm {props.age} years old</p>
    return (
        <div className={clasess.Person}>
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        // <StyleDiv>
        //     <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old</p>
        //     <p>{props.children}</p>
        //     <input type="text" onChange={props.changed} value={props.name}/>
        // </StyleDiv>
    )
}

export default person;