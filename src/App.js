import React, { Component } from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <h1>I'm an Hell</h1>
  //   </div>
  // );
  return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'I\'m an Hell'))
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