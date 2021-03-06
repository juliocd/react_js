import React, { Component } from 'react';
import './App.css';

// Assigment 1
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

// Assigment 2
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'


class App extends Component {
  state = {
    username: "julio1",
    textLength: 0,
    textValue: ""
  }

  usernameEventHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  textHandler = (event) => {
    this.setState({
      textLength: event.target.value.length,
      textValue: event.target.value
    })
  }

  removeChart = (idexToRemove) => {
    const text = this.state.textValue.toString();
    let textArray = text.split('');
     textArray.splice(idexToRemove, 1);

    this.setState({
      textValue: textArray.join(''),
      textLength: textArray.length
    })
  }

  render() {
    let text = this.state.textValue.toString();
    let charts = (<div></div>);
    if(this.state.textLength >= 5){
      charts = (
        <div>
          {
            text.split('').map((char, index) => {
              return <CharComponent key={index} char={char} click={() => this.removeChart(index)}></CharComponent>
            })
          }
        </div>
      )
    }


    return (
      // Assignment 2
      <div className="App">
        <input type="text" onChange={this.textHandler} value={this.state.textValue}></input>
        <ValidationComponent textLength={this.state.textLength} value={this.state.textValue}></ValidationComponent>
        {charts}
      </div>

      // // Assigment 1
      // <div className="App">
      //   <UserInput change={this.usernameEventHandler} username={this.state.username}></UserInput>
      //   <UserOutput username={this.state.username}></UserOutput>
      // </div>
    );
  }
}

export default App;
