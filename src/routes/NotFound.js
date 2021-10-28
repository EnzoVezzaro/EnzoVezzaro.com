import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import './Preloader.css';

class NotFound extends Component {
  constructor(props){
    super(props);

    this.state = {
    }

  }

  render() {
    const imgNotFound = require(`../assets/img/page-not-found.svg`).default;

    return (
      <div style={{ display: 'flex', height: '100vh', backgroundImage: 'url(' + imgNotFound + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      </div>
    );
  }
}

export default NotFound;
