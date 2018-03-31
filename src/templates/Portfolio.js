import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import './App.css';
import Menu from '../components/Menu.js';
import Preloader from '../components/Preloader.js';

class Portfolio extends Component {
  constructor(props){
    super(props);

    this.state = {
      project: this.props.location.state.project,
      hidePreload: false
    }

  }

  componentDidMount(){
    window.scrollTo(0, 0)
    
    setTimeout(()=>{
      this.setState({ hidePreload: true })
    }, 2000)
  }

  render() {
    const {project} = this.state;
    return (
      <div>

        <Preloader />

        {/* top-bar */}
        <div className="top-bar">
            <h1>{ project.title }</h1>
            <p><a href="#">{ project.keywords.main }</a> / { project.keywords.secondary }</p>
        </div>
        {/* end top-bar */}

        {/* main-container */}
        <div className="container main-container">
            <div className="col-md-12">
                <img src={ project.image } alt="" className="img-responsive" />
                <div className="h-30"></div>
            </div>

            <div className="col-md-12">
                <h3 className="text-uppercase">{ project.title }</h3>
                <h5>{ project.description }</h5>
                <div className="h-30"></div>
            </div>

            <div className="col-md-9">
              { project.body }
            </div>

            <div className="col-md-3">
                <ul className="cat-ul">
                {
                  project.features.map(function(feature, index){
                   return <li key={index} ><i className="ion-ios-circle-filled"></i> {feature}</li>
                 })
                }
                </ul>
                <div className="h-10"></div>
                <h4>Share</h4>
                <ul className="social-ul">
                    <li className="box-social"><a href="#0"><i className="ion-social-facebook"></i></a></li>
                    <li className="box-social"><a href="#0"><i className="ion-social-instagram-outline"></i></a></li>
                    <li className="box-social"><a href="#0"><i className="ion-social-twitter"></i></a></li>
                    <li className="box-social"><a href="#0"><i className="ion-social-dribbble"></i></a></li>
                </ul>
            </div>
        </div>
        {/* end main-container */}


        {/* footer */}
        <footer>
            <div className="container-fluid">
                <p className="copyright">© Box Portfolio 2016</p>
            </div>
        </footer>
        {/* end footer */}

        {/* back to top */}
        <a href="#0" className="cd-top"><i className="ion-android-arrow-up"></i></a>
        {/* end back to top */}

      </div>
    );
  }
}

export default Portfolio;
