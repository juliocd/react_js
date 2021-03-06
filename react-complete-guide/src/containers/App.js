import React, { Component } from 'react';

import classesApp from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
constructor(props) {
  super(props);
  console.log('[App.js] constructor');
}

  state = {
    persons: [
      {
        name: "Max",
        age: 34,
        id: 33
      },
      {
        name: "Ana",
        age: 30,
        id: 32
      },
      {
        name: "Doroty",
        age: 23,
        id: 31
      }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 34,
          id: 33
        },
        {
          name: "AnaOV",
          age: 30,
          id: 32
        },
        {
          name: "General",
          age: 33,
          id: 31
        }
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id = id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons){
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }

    return (
        <div className={classesApp.App}>
          <Cockpit
            appTitle={this.props.appTitle}
            clicked={this.togglePersonHandler}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons} />
            {persons}
        </div>
    );
  }
}

export default App;
