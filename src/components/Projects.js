import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
//import './App.css';
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

                      if (index == 2 || index == 5 || index == 8 || index == 11){
                        className = 'col-md-6 col-sm-12';
                      } else {
                        className = 'col-md-3 col-sm-6';
                      }

                      return (
                        <div className={`${className} logo`} key={ `project_${index}`}>
                          <Link
                            key={index}
                            to={{
                              pathname: `/${project.path}`,
                              // this is the trick!
                              state: { project: project }
                            }}
                            className="portfolio_item">
                              <img src={require(`../assets/img/portfolio/${project.thumbnail}`)} alt="image" className="img-responsive" />
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
