import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import "./Projects.css";
import Portfolio from "../templates/Portfolio.js";
import getTechIcons from '../utils/tech_icons';
var ProjectsData = require("../data/Projects");

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: ProjectsData.projects,
      allProjects: ProjectsData.projects,
      techSelected: null
    };
  }

  selectTech = (e) =>{
    if (e){
      let tech = e.currentTarget.id;
      this.filterProjectByTech(tech);
    } else {
      this.setState({
        projects: this.state.allProjects,
        techSelected: e
      })
    }
  }

  filterProjectByTech = (tech) =>{
    console.log(tech);
    let newPojectsObj = [];
    const { allProjects } = this.state;
    allProjects.map(project=>{{
      project.technology.map((techP, i) => {
        if (techP == tech){
          newPojectsObj.push(project);
        }
      })}
    })
    this.setState({
      projects: newPojectsObj,
      techSelected: tech
    })
  }

  render() {
    const { projects, techSelected } = this.state;

    if (techSelected){
      let icon = getTechIcons(techSelected);
      var iconTech = require(`../assets/img/portfolio/services/${icon}`).default;
      console.log(iconTech);
    }
    console.log(techSelected);

    if (!projects) {
      return <Redirect to="/" />;
    }

    return (
      <div className="portfolio-div">
        <div className="portfolio">
          {projects.map((project, index) => {
            var imgUrl = require(`../assets/img/portfolio/${project.thumbnail}`).default;
            var divStyleImg = {
              backgroundImage: "url(" + imgUrl + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "200px",
            };
            return (
              <div className="portfolio_item" key={`portfolio_item_${index}`}>
                <div className="portfolio_item_content">
                  <Link
                    to={{
                      pathname: `/${project.path}`,
                      state: { project: project },
                    }}
                  >
                    <div className="item_image" style={divStyleImg}></div>
                  </Link>
                  <div className="item_info_container">
                    <div className="item_info">
                      <h3>{project.title}</h3>
                      <em>
                        {project.keywords.main} / {project.keywords.secondary}
                      </em>
                    </div>
                    <div className="divider"></div>
                  </div>
                  <div className="services"> 
                    {
                      project.technology.map((tech, i) => {
                        let icon = getTechIcons(tech);
                        var iconTech = require(`../assets/img/portfolio/services/${icon}`).default;
                        return(
                          <img key={`img_${i}`} src={ iconTech } alt={tech} title={tech} id={tech} onClick={(e)=>{this.selectTech(e)}} className="items-img-services" />
                        )
                      })
                    }
                  </div>
                  <div className="item_footer">
                    <Link
                      to={{
                        pathname: `/${project.path}`,
                        state: { project: project },
                      }}
                    >
                      See Project
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="icons-selected">
          {
            techSelected && 
            <div>
              <img src={ iconTech } alt={techSelected} title={techSelected} id={techSelected} onClick={(e)=>{this.selectTech(e)}} className="items-img-services" />
              <div className={'icons-remove'}>
                <img onClick={(e)=>{this.selectTech(null)}} src={ require(`../assets/img/icons/remove.svg`).default } />
              </div>
            </div>
          }
        </div>
        {/* portfolio */}
      </div>
    );
  }
}

export default Projects;
