import React from 'react';
import './App.css';
import Squares from './components/Squares/Squares';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Squares colour= "hotpink" />
      <SignUp minimumLength= { 12 } />
    </div>
  );
}

export default App;
