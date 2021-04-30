// ### CLASS COMPONENT ###
import React, {Component, PureComponent} from 'react';
// # PureComponent has internally implemeneted the props changed validation, this way is not necessary to add the shouldComponentUpdate validations

import Person from './Person/Person';
import AuthContext from './../../context/auth-context';

class Persons extends PureComponent {

    // // It's very helfull for performace, it avoids re-render the component if the values don't change
    // // Only for Component
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate',nextProps, nextState);
    //     if(nextProps.persons !== this.props.persons 
    //         || nextProps.changed !== this.props.changed 
    //         || nextProps.clicked !== this.props.clicked){
    //         return true;
    //     }
    //     return false;
    // }

    getSnapshotBeforeUpdate(prevPrpos, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate',prevPrpos, prevState);
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevPrpos, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', prevPrpos, prevState);
        console.log(snapshot)
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount')
    }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person 
                    changed={(event) => this.props.changed(event, person.id)}
                    key={person.id}
                    clicked={() => this.props.clicked(index)}
                    name={person.name} 
                    age={person.age}></Person>
            )
        })
        // return (
        //     <AuthContext.Consumer>
        //         {(context) => this.props.persons.map((person, index) => {
        //             return (
        //                 <Person 
        //                     changed={(event) => this.props.changed(event, person.id)}
        //                     key={person.id}
        //                     clicked={() => this.props.clicked(index)}
        //                     name={person.name} 
        //                     age={person.age}></Person>
        //             )
        //         })}
        //     </AuthContext.Consumer>
        // )
    }
}

export default Persons;