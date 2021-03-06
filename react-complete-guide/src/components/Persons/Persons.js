import React from 'react';

import Person from './Person/Person';

const persons = (props) => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, index) => {
        return (
            <Person 
                changed={(event) => props.changed(event, person.id)}
                key={person.id}
                clicked={() => props.clicked(index)}
                name={person.name} 
                age={person.age}></Person>
        )
    })
}

export default persons;