import React, { Component } from 'react';
import classesApp from'./App.css';
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.sp ? 'red' : 'green'};
  font: inherit;
  border: 1px solid blue;
  padding: 9px;
  cursor: pointer;
  color: white;
  
  &:hover {
    background-color: ${props => props.sp ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
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
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    // const style = {
    //   backgroundColor: '#444555',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '9px',
    //   cursor: 'pointer',
    //   color: 'white',
    //   ':hover': { //Radium
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    let persons = null;
    let buttonClass = [classesApp.Button];

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              changed={(event) => this.nameChangeHandler(event, person.id)}
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}></Person>
            })
          }
        </div>
      )

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'yellow',
      //   color: 'blue'
      // }
      buttonClass.push(classesApp.Blue)
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push(classesApp.red);
    }
    if(this.state.persons.length <= 1){
      classes.push(classesApp.bold);
    }


    return (
      <StyleRoot>
        <div className={classesApp.App}>
          <p className={classes.join(' ')}>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          {/* () => this.switchNameHandler('Carlos') it's inefficient */}
          <button className={buttonClass.join(' ')} onClick={() => this.switchNameHandler('Carlos')}>Switch Name</button>
          <StyledButton sp={this.state.showPersons} onClick={this.togglePersonHandler}>Show/Hide Person</StyledButton>
          {/* {this.state.showPersons ?
              <div>
                <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} />
                <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age} 
                  click={this.switchNameHandler.bind(this, "Oscar")}>Has a child</Person>
                <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} 
                  changed={this.nameChangeHandler}/>
            </div> : null} */}
            {persons}
        </div>
      </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
