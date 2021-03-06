import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) =>{
    let assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
        assignedClasses.push(classes.Red);
    }
    if(props.persons.length <= 1){
        assignedClasses.push(classes.Bold);
    }

    return(
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>{props.appTitle}</p>
            <button 
                className={btnClass}
                onClick={props.clicked}
                >Toggle Person</button>
        </div>
    )
}

export default cockpit;