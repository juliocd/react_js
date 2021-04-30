import React, { Component } from 'react';

import classesApp from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass'; //It's not a component, is a normal function instead;
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

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
    showPersons: false,
    showCockpit: true,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true; // false: Avoid the update
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    // Best practice, if you need to use the previos props' previous values
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

  loginHandler = () =>{
    this.setState({authenticated: true})
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
        <Aux>
          <button key="k1" onClick={() => {
            this.setState({showCockpit: false})
            }}>Remove Cockpit</button>
            <AuthContext.Provider value={{
                authenticated: this.state.authenticated,
                login: this.loginHandler
            }}>
              {this.state.showCockpit ? 
              <Cockpit
                appTitle={this.props.appTitle}
                clicked={this.togglePersonHandler}
                showPersons = {this.state.showPersons}
                personsLength = {this.state.persons.length} />  : null}
              {persons}
            </AuthContext.Provider>
        </Aux>
    );
  }
}

export default withClass(App, classesApp.App); // Wraping component
