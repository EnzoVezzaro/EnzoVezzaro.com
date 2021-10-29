import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Portfolio.css';
import Menu from '../components/Menu.js';
import Preloader from '../components/Preloader.js';
import getTechIcons from '../utils/tech_icons';
import $ from 'jquery'; 

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
    if (project.images.section2Window){
      const section_2_Window = require(`../assets/img/portfolio/${project.images.section2Window}`).default;
    }
    return (
      <div className="project">

        {/* top-bar */}
        <div className="top-bar" style={{ backgroundImage: `url(../assets/img/portfolio/${project.images.introWindow})` }}>
          <div className="container">
            <div className="col-sm-12">
              <div className="go-back">
                <a onClick={()=>this.props.history.goBack()}>
                  <img src={ require(`../assets/img/icons/left-arrow.svg`).default } />
                </a>
              </div>
            </div>
            <div className="col-sm-12 project-intro-hero">
              <h1>{ project.title }</h1>
              <p>{ project.keywords.main } / { project.keywords.secondary }</p>
            </div>
            <div className="row no-gutters project-hero-presentation">
              <div className="col-sm-6 presentation">
                <div className="col-sm-10">
                  <p className="presentation">
                    <span>Project Presentation. </span>
                    { `${project.body}` }
                  </p>
                </div>
                <div className="col-sm-10">
                  <p className="presentation"><span>URL. </span><a href={ `${project.link}` } target="_blank" >{ `${project.link}` }</a></p>
                </div>
              </div>
              <div className="col-sm-6 services">
                <div className="col-sm-10">
                  <div className="services">
                    <span>Services. </span>
                    <div>
                      {
                        project.services.map(function(service, index){
                          if (index < 2){
                            return <p key={`service_${index}`}>{ `${service} -` }&nbsp;</p>
                          } else {
                            return <p key={`service_${index}`}>{ `${service}` }&nbsp;</p>
                          }
                      })
                      }
                    </div>
                  </div>
                </div>
                <div className="col-sm-10">
                  <div className="technology">
                    <span>Technology Stack. </span>
                    <div className='services-icons'>
                      {
                      project.technology.map(function(technology, index){
                      {
                          let icon = getTechIcons(technology);
                          var iconTech = require(`../assets/img/portfolio/services/${icon}`).default;
                          console.log(iconTech);
                          return <img key={`technology_${index}`} src={ iconTech } alt={technology} title={technology} className="img-services" />;
                      }
                    })
                    }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {
              project.images.introWindow &&
              <div className="col-sm-12 project-hero-window">
                <img src={ require(`../assets/img/portfolio/${project.images.introWindow}`).default } alt="" className="img-responsive drop-shadow" />
              </div>
            }
            {
              project.images.section1Window &&
              <div className="col-sm-12 project-hero-window project-section-1-window">
                <img src={ require(`../assets/img/portfolio/${project.images.section1Window}`).default } alt="" className="img-responsive drop-shadow" />
              </div>
            }
            {
              project.images.introPhone &&
              <div className="col-sm-12 project-hero-phone">
                <div>
                  <img src={ require(`../assets/img/portfolio/${project.images.introPhone}`).default } alt="" className="img-responsive drop-shadow" />
                </div>
              </div>
            }
          </div>
        </div>
        {/* end top-bar */}

        {/* main-container */}
        <div className="container-fluid main-container ">
          <div className="sections col-md-12" id="section_1" >
            
          </div>
        </div>

      </div>
    );
  }
}

export default Portfolio;
