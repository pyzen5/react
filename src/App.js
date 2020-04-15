import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  // JSX
  return (
    <div className="App">
      <h1>I'm an Hell</h1>
      <p>Its working</p>
      <Person name="Max" age="28" />
      <Person name="Cax" age="29" />
      <Person name="Rax" age="24">My Hobbies: Racing</Person>
      <Person name="Rex" age="23" />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'I\'m an Hell'))
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>I'm an Hell</h1>
//       </div>
//     );
//   }
// }

export default App;