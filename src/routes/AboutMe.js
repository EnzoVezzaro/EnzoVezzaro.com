import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import './App.css';


class AboutMe extends Component {
  render() {
    return (
      <div className='about-me-container' style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <img src={require("../assets/img/under-development.svg")} height='500' alt="under development" />
      </div>
    );
  }
}

export default AboutMe;
