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
    const {project} = this.state;
    return (
      <div>
        <h1>Not Found!!!</h1>
      </div>
    );
  }
}

export default NotFound;
