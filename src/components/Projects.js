import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import './Projects.css';
import Portfolio from '../templates/Portfolio.js';
var ProjectsData = require('../data/Projects');

class Projects extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: ProjectsData.projects
    }

  }

  render() {
    const projects = this.state.projects;

    if (!projects) {
      return <Redirect to='/'/>;
    }

    return (
      <div className="portfolio-div">
          <div className="portfolio">
              <div className="no-padding portfolio_container">
                  {
                    projects.map((project, index) => {
                      let className = '';
                      var imgUrl = require(`../assets/img/portfolio/${project.thumbnail}`);

                      if (index == 2 || index == 5 || index == 8 || index == 11){
                        className = 'col-md-6';
                        var divStyle = {
                            backgroundImage: 'url(' + imgUrl + ')',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '50vw',
                            height: '50vw'
                        }
                      } else {
                        className = 'col-md-3';
                        var divStyle = {
                            backgroundImage: 'url(' + imgUrl + ')',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '25vw',
                            height: '25vw'
                        }
                      }

                      return (
                        <div className={`${className} logo`} key={ `project_${index}`}>
                          <Link
                            key={index}
                            to={{
                              pathname: `/${project.path}`,
                              state: { project: project }
                            }}
                            className="portfolio_item" style={ divStyle }>

                              <div className="portfolio_item_hover">
                                  <div className="portfolio-border clearfix">
                                      <div className="item_info">
                                          <span>{ project.title }</span>
                                          <em>{ project.keywords.main } / { project.keywords.secondary }</em>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                        </div>
                      )
                    })
                  }
              </div>
          </div>
          {/* portfolio */}
      </div>
    );
  }
}

export default Projects;
