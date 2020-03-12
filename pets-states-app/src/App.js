import React from 'react';
import './App.css';
import Pets from './components/Pets';

function App() {
  //component mount does not run until after this alert runs and the user presses ok because we put an alert in the parent component
  // alert('Did your child component pet mount yet?')
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='darkpurp'>Pet Store App</h1>
        <Pets color='brown'/>
      </header>

    </div>
  );
}

export default App;
