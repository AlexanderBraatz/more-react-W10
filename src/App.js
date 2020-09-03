import React from 'react';
import './App.css';
import Squares from './components/Squares/Squares';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import Articles from './news/Articles';
import Header from './news/Header';

  

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
        <Route path="/news">
          <Articles />
          <Squares colour= "hotpink" />
        </Route>
        <Route path="/stuff">
          <SignUp minimumLength= { 12 } />
        </Route>

      </Router>
    </div>
  );
}

export default App;
