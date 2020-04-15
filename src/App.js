import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

// function App() {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Rex', age: 27 },
//       { name: 'Fax', age: 24 },
//       { name: 'Cax', age: 23 },
//     ]
//   })

//   const switchNameHandler = () => {
//     console.log('clicked!');
//     // this.state.persons[0].name = 'New Name';
//     setPersonState({
//       persons: [
//         { name: 'Iola', age: 28 },
//         { name: 'Rex', age: 59 },
//         { name: 'Fax', age: 24 },
//         { name: 'Cax', age: 67 },
//       ]
//     })
//   }

//   // JSX
//   return (
//     <div className="App">
//       <h1>I'm an Hell</h1>
//       <p>Its working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//       <Person name={personState.persons[1].name} age={personState.persons[1].age} />
//       <Person name="Rax" age="24">My Hobbies: Racing</Person>
//       <Person name="Rex" age="23" />
//     </div>
//   );
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'I\'m an Hell'))
// }

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28 },
      {name: 'Rex', age: 27 },
      {name: 'Fax', age: 24 },
      {name: 'Cax', age: 23 },
    ]
  }

  switchNameHandler = (newName) => {
    console.log('clicked!');
    // this.state.persons[0].name = 'New Name';
    this.setState({persons: [
      {name: newName, age: 28 },
      {name: 'Rex', age: 59 },
      {name: 'Fax', age: 24 },
      {name: 'Cax', age: 67 },
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Max', age: 28 },
        {name: 'Rex', age: 59 },
        {name: event.target.value, age: 24 },
        {name: 'Cax', age: 67 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <h1>I'm an Hell</h1>
      <p>Its working</p>
      {/* inefficient */}
      <button onClick={() => this.switchNameHandler('Iota')}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age="24" click={this.switchNameHandler.bind(this, 'UIOp')} change={this.nameChangedHandler}>
        My Hobbies: Racing
        </Person>
      <Person name="Rex" age="23" />
    </div>
    );
  }
}

export default App;