import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Portfolio.css';
import Menu from '../components/Menu.js';
import Preloader from '../components/Preloader.js';

class Portfolio extends Component {
  constructor(props){
    super(props);

    if (!props.location.state){
      window.location.replace("/");
    } else {
      this.state = {
        project: this.props.location.state.project,
        hidePreload: false
      }
    }

  }

  componentWillMount(){
    window.scrollTo(0, 0)

    setTimeout(()=>{
      this.setState({ hidePreload: true })
    }, 2000)

  }

  render() {
    const {project} = this.state;
    const section_2_Window = require(`../assets/img/portfolio/${project.images.section2Window}`);
    return (
      <div className="project">

        <Preloader />

        {/* top-bar */}
        <div className="top-bar" style={{ backgroundImage: `url(../assets/img/portfolio/${project.images.introWindow})` }}>
          <div className="container">
            <div className="col-sm-12 project-intro-hero">
              <h1>{ project.title }</h1>
              <p>{ project.keywords.main } / { project.keywords.secondary }</p>
            </div>
            <div className="row no-gutters project-hero-presentation">
              <div className="col-sm-6 presentation">
                <div className="col-sm-10">
                  <p className="presentation"><span>Project Presentation. </span>{ `${project.body}` }</p>
                </div>
                <div className="col-sm-10">
                  <p className="presentation"><span>Link. </span><a href={ `${project.link}` } target="_blank" >{ `${project.link}` }</a></p>
                </div>
              </div>
              <div className="col-sm-6 services">
                <div className="col-sm-10">
                  <div className="services"><span>Services. </span>
                  {
                    project.services.map(function(service, index){
                     return <p key={`service_${index}`}>{ `${service},` }&nbsp;</p>
                   })
                  }
                  </div>
                </div>
                <div className="col-sm-10">
                  <div className="technology"><span>Technology. </span>
                  {
                    project.technology.map(function(technology, index){
                     return <p key={`technology_${index}`}>{ `${technology},` }&nbsp;</p>
                   })
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="col-sm-12 project-hero-window">
              <img src={ require(`../assets/img/portfolio/${project.images.introWindow}`) } alt="" className="img-responsive drop-shadow" />
            </div>
            <div className="col-sm-12 project-hero-phone">
              <div>
                <img src={ require(`../assets/img/portfolio/${project.images.introPhone}`) } alt="" className="img-responsive drop-shadow" />
              </div>
            </div>
          </div>
        </div>
        {/* end top-bar */}

        {/* main-container */}
        <div className="container-fluid main-container ">
          <div className="sections col-md-12" id="section_1" >
            <div className="col-sm-7 project-section-1-window">
              <div>
                <img src={ require(`../assets/img/portfolio/${project.images.section1Window}`) } alt="" className="img-responsive drop-shadow" />
              </div>
            </div>
            <div className="col-sm-5 project-section-1-body">
                <h2 className="section-1-title">01.</h2>
                <h2 className="section-1-title">{ `${project.section_1.title}` }</h2>
                <br />
                <p><span className="bold-text" >Project Concept.</span> { `${project.section_1.body }` }</p>
            </div>
          </div>
          {/*
            style={{ backgroundImage: `url(${section_2_Window})` }}
            <span className="bold-text" >Project Concept.</span>
          */}
          <div className="sections col-md-12" id="section_2" >
            <div className="col-md-7">

            </div>
            <div className="col-md-5">
              <h2 className="section-1-title">02.</h2>
              <h2 className="section-1-title">{ `${project.section_2.title }` }</h2>
              <br />
              <p>{ `${project.section_2.body }` }</p>
            </div>
          </div>
          <div className="sections col-md-12" id="section_3">
            <div className="col-sm-5">
              <h2 className="section-1-title">03.</h2>
              <h2 className="section-1-title">{ `${project.section_3.title }` }</h2>
              <br />
              <p>{ `${project.section_3.body }` }</p>
            </div>
            <div className="col-sm-7">
              <div className="section-3-images">
                <img src={ require(`../assets/img/portfolio/${project.images.section3Phone}`) } alt="" className="img-responsive drop-shadow" />
                <img src={ require(`../assets/img/portfolio/${project.images.section3Tablet}`) } alt="" className="img-responsive drop-shadow" />
              </div>
            </div>
          </div>
        </div>
        {/* end main-container */}


        {/* footer */}
        <footer className='footer-project'>
            <div className="container-fluid">

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

export default Portfolio;
