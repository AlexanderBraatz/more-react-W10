import React from 'react';
import './App.css';
import Squares from './components/Squares/Squares';
import SignUp from './components/SignUp/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './news/Header';
import Articles from './news/Articles';
import Article from './news/Article';
import CreateArticle from './news/CreateArticle';
import FourOhFour from './news/FourOhFour';

  

function App() {
  return (
    <div className="ml-5 mr-5 m-4">
      <Router>
          <Header />
          <Switch>
            <Route exact path="/news">
              <Articles />
            </Route>
            

            <Route  exact path="/news/create">
              <CreateArticle />
            </Route>

            <Route 
              exact path="/news/:id"
              render={ ( { match }) => (<Article id = { match.params.id }/>)}> 
              {/*^params= (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path*/}
            </Route>

            <Route path="/stuff">
              <Squares colour= "hotpink" />
              <SignUp minimumLength= { 12 } />
            </Route>
            
            <FourOhFour/>
          </Switch>

      </Router>
    </div>
  );
}

export default App;
