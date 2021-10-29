import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Menu.css';
// import PDF from '../assets/Resume-compressed.pdf';
class Menu extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {

    return (
      <div>
        {/* box header */}
        <header className="box-header">
            <div className="box-logo">
                <a href="/">
                  <img src="/img/logo_crea_con_codigos.svg" width="80" style={{ position:'relative', top: -15 }} alt="Logo" />
                </a>
            </div>
            {/* box-nav */}
            <a className="box-primary-nav-trigger" href="#0">
                <span className="box-menu-text">Menu</span><span className="box-menu-icon"></span>
            </a>
            {/* box-primary-nav-trigger */}
        </header>
        {/* end box header */}

        {/* nav */}
        <nav>
            <ul className="box-primary-nav">
                <li className="box-label">About me</li>

                <li><a href="/">Projects</a> <i className="ion-ios-circle-filled color"></i></li>
                <li><a href="/about-me">About me</a></li>
                <li><a href="mailto:enzovezzaro05@gmail.com?Subject=Hello%20Enzo" target="_blank">Contact me</a></li>
                <li><a href={'/img/Resume-compressed.pdf'} target="_blank">Resume</a></li>

                <li className="box-label">Follow me</li>
                <div className='socialContainer'>
                  <li className="box-social"><a href="https://www.facebook.com/evezzaro" target='_blank'><i className="ion-social-facebook"></i></a></li>
                  <li className="box-social"><a href="https://www.instagram.com/enzovezzaro/" target='_blank'><i className="ion-social-instagram-outline"></i></a></li>
                  <li className="box-social">
                    <a href="https://medium.com/@insuladigitalstudio" target='_blank'>
                      <img src={require("../assets/img/medium.svg").default} alt="Logo" />
                    </a>
                  </li>
                  <li className="box-social"><a href="https://github.com/EnzoVezzaro" target='_blank'><i className="ion-social-github"></i></a></li>
                </div>
            </ul>
        </nav>
        {/* end nav */}
      </div>
    );
  }
}

export default Menu;
