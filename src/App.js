import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './routes/HomePage.js';
import AboutMe from './routes/AboutMe.js';
import ContactMe from './routes/ContactMe.js';
import NotFound from './routes/NotFound.js';
import Portfolio from './templates/Portfolio.js';
import Menu from './components/Menu.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/" render={() => <HomePage />}/>
            <Route path="/about-me" render={() => <AboutMe />}/>
            <Route path="/contact-me" component={ContactMe}/>
            <Route path="/project" component={Portfolio}/>
            <Route path="/404-not-found" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
