import React from 'react';
import './App.css';
import Squares from './components/Squares/Squares';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import Header from './news/Header';
import Articles from './news/Articles';
import Article from './news/Article';

  

function App() {
  return (
    <div className="ml-5 mr-5 m-4">
      <Router>
          <Header />
        <Route exact path="/news">
          <Articles />
        </Route>
        
        <Route 
          path="/news/:id"
          render={ ( { match }) => (<Article id = { match.params.id }/>)}/> 
          {/*^params= (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path*/}

        <Route path="/stuff">
          <Squares colour= "hotpink" />
          <SignUp minimumLength= { 12 } />
        </Route>

      </Router>
    </div>
  );
}

export default App;
