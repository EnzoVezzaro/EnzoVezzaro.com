import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Preloader.css';

class Preloader extends Component {
  constructor(props){
    super(props);

    this.state = {
      hidePreload: false
    }

    this.timer = setTimeout(_ => {
      this.setState({hidePreload: true}); // fade back in
    }, 1500); // animation timing offset

  }

  render() {
    const {project} = this.state;
    return (
      <div>
        {/* Preloader */}
        <div id="preloader" style={{ visibility: this.state.hidePreload == false ? 'visible' : 'hidden' }} >
            <div className="pre-container">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        </div>
        {/* end Preloader */}
      </div>
    );
  }
}

export default Preloader;
