import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Portfolio.css';
import Menu from '../components/Menu.js';
import Preloader from '../components/Preloader.js';

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
      const section_2_Window = require(`../assets/img/portfolio/${project.images.section2Window}`);
    }
    return (
      <div className="project">

        {/* top-bar */}
        <div className="top-bar" style={{ backgroundImage: `url(../assets/img/portfolio/${project.images.introWindow})` }}>
          <div className="container">
            <div className="col-sm-12">
              <div className="go-back">
                <a onClick={()=>this.props.history.goBack()}>
                  <img src={ require(`../assets/img/icons/left-arrow.svg`) } />
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
                          switch(technology) {
                            case 'SHOPIFY':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/shopify.svg`) } alt="Shopify" title='Shopify' className="img-services" />
                            case 'WORDPRESS':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/wordpress.svg`) } alt="Wordpress" title='Wordpress' className="img-services" />
                            case 'HTML5':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/html5.svg`) } alt="HTML 5" title='HTML 5' className="img-services" />
                            case 'CSS':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/css3.svg`) } alt="CSS 3" title='CSS 3' className="img-services" />
                            case 'JS':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/js.svg`) } alt="Javascript" title='Javascript' className="img-services" />
                            case 'JQUERY':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/jquery.svg`) } alt="jquery" title='jquery' className="img-services" />
                            case 'GITHUB':
                              return project.github_link ? <a key={`technology_${index}`} target="blank" href={`${project.github_link}`} ><img src={ require(`../assets/img/portfolio/services/github.svg`) } alt="Github" title='Github' className="img-services" /></a> : <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/github.svg`) } alt="Github" title='Github' className="img-services" />
                            case 'ANALYTICS':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/google-analytics.svg`) } alt="Google Analytics" title='Google Analytics' className="img-services" />
                            case 'MAILCHIMP':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/mailchimp.svg`) } alt="Mailchimp" title='Mailchimp' className="img-services" />
                            case 'HUGO':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/hugo.svg`) } alt="Hugo" title='Hugo' className="img-services" />
                            case 'NETLIFY':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/netlify.svg`) } alt="Netlify" title='Netlify' className="img-services" />
                            case 'REACTJS':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/reactjs.svg`) } alt="React JS" title='React JS' className="img-services" />
                            case 'REACTNATIVE':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/reactnative.svg`) } alt="React Native" title='React Native' className="img-services" />
                            case 'AWS':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/aws.svg`) } alt="AWS" title='AWS' className="img-services" />
                            case 'GOOGLEMAPS':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/googlemaps.svg`) } alt="Google Maps" title='Google Maps' className="img-services" />
                            case 'FIREBASE':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/firebase.svg`) } alt="Firebase" title='Firebase' className="img-services" />
                            case 'SERVERLESS':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/serverless.png`) } alt="Serverless" title='Serverless' className="img-services" />
                            case 'STRIPE':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/stripe.svg`) } alt="Stripe" title='Stripe' className="img-services" />
                            case 'KEPLERGL':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/kepler.png`) } alt="Kepler.gl" title='Kepler.gl' className="img-services" />
                            case 'ELASTIC_SEARCH':
                              return <img key={`technology_${index}`} src={ require(`../assets/img/portfolio/services/elasticsearch.png`) } alt="Elastic Search" title='Elastic Search' className="img-services" />
                          }
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
                <img src={ require(`../assets/img/portfolio/${project.images.introWindow}`) } alt="" className="img-responsive drop-shadow" />
              </div>
            }
            {
              project.images.introPhone &&
              <div className="col-sm-12 project-hero-phone">
                <div>
                  <img src={ require(`../assets/img/portfolio/${project.images.introPhone}`) } alt="" className="img-responsive drop-shadow" />
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
