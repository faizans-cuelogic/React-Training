import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {id:1, name: "Faizan Shaikh", age:25},
      {id:2, name: "Ganesh", age:25},
      {id:3, name: "Faizan2", age:25}
    ],
    otherState: "Some other value",
    showPerson: false
  }
  
  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
          {name: newName, age:25},
          {name: "Ganesh", age:25},
          {name: newName, age:25}
        ]
      } 
    )
  }

  switchNameChangeHandler = (event) => {
    this.setState(
      {
        persons: [
          {name: event.target.value, age:25},
          {name: "Ganesh", age:25},
          {name: "Faizan", age:25}
        ]
      } 
    )
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons:persons
    });
  }

  deleteNameChangeHandler = (personInedx) => {
    const persons = [...this.state.persons];
    // const persons = this.state.persons.slice();
    persons.splice(personInedx, 1);
    this.setState({persons: persons});
  }

  toggleHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({showPerson: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deleteNameChangeHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.changeNameHandler(event, person.id)} />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>IM react App</h1>
        <button
          style={style}
          onClick={() => this.toggleHandler()}>Watch Name
        </button>
        {persons}
      </div>
    )

    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Im a react App"))
  }
}

export default App;
