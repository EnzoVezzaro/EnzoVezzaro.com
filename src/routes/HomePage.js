import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import './App.css';
import Menu from '../components/Menu.js';
import Preloader from '../components/Preloader.js';
import Projects from '../components/Projects.js';


class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>

        <Preloader />

        <div className="container-fluid">

            {/* box-intro */}
            <section className="box-intro">
                <div className="table-cell">
                    <h1 className="box-headline letters rotate-2">
                        <span className="box-words-wrapper">
                            <b className="is-visible">design.</b>
                            <b>&nbsp;coding.</b>
                            <b>graphic.</b>
                        </span>
                </h1>
                    <h5>all you need is a good developer.</h5>
                </div>

                <div className="mouse">
                    <div className="scroll"></div>
                </div>
            </section>
            {/* end box-intro */}
        </div>

        <Projects />

        {/* footer */}
        <footer>
            <div className="container-fluid">
                <p className="copyright">© Enzo Portfolio 2018</p>
            </div>
        </footer>
        {/* end footer */}

        {/* back to top
        <a href="#0" className="cd-top"><i className="ion-android-arrow-up"></i></a>
        */}
        {/* end back to top */}


      </div>
    );
  }
}

export default HomePage;
