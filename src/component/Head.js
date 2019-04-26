import React, { Component } from 'react';
import SimpleSlider from './Slider';
import logo from '../img/logo.png';

export default class Head extends Component{

    openMenu(){
        const elem = document.querySelector('.header__nav-mobile');
        elem.style.transform = "translateX(0%)";
    }
    
    closeMenu(){
       const elem = document.querySelector('.header__nav-mobile');
       elem.style.transform = "translateX(-100%)";
    }

    render(){
        return(
        <div className="head">
          <div className="header">
            <div className="wrapper">
              <div className="header__nav-mobile">
                <ul className="header__nav__list">
                  <i className="header__nav-mobile__close_btn" onClick={this.closeMenu}>&larr;</i>
                  <li className="nav__item"><a href="#">Home</a></li>
                  <li className="nav__item"><a href="#">About us</a></li>
                  <li className="nav__item"><a href="#">Portfolio</a></li>
                  <li className="nav__item"><a href="#">Features</a></li>
                  <li className="nav__item"><a href="#">Blog</a></li>
                  <li className="nav__item"><a href="#">Pricing</a></li>
                  <li className="nav__item"><a href="#">Shortcodes</a></li>
                  <li className="nav__item"><a href="#">Contact</a></li>
                  <li className="nav__item">
                    <div className="nav__buttons">
                        <li className="nav__item"><a href="#"><svg width="18" height="24" viewBox="0 0 18 24"><path d="M17.994 5.997v14.998a3 3 0 0 1-2.999 3H3.002a3 3 0 0 1-2.999-3V5.997A2.999 2.999 0 0 1 3.002 3H4.5c0-1.657 2.013-3 4.498-3 2.484 0 4.497 1.343 4.497 3h1.5a2.999 2.999 0 0 1 2.998 2.998zM6 3h5.997c0-1.037-1.342-1.5-2.998-1.5-1.656 0-2.999.463-2.999 1.5zm10.495 16.496H1.502v1.5c0 .828.672 1.5 1.5 1.5h11.993a1.5 1.5 0 0 0 1.5-1.5zm0-13.498a1.5 1.5 0 0 0-1.5-1.5h-1.499v4.5h-1.499v-4.5H6v4.5H4.501v-4.5h-1.5a1.5 1.5 0 0 0-1.499 1.5v11.998h14.993z"/><path fill="#fff" d="M17.994 5.997v14.998a3 3 0 0 1-2.999 3H3.002a3 3 0 0 1-2.999-3V5.997A2.999 2.999 0 0 1 3.002 3H4.5c0-1.657 2.013-3 4.498-3 2.484 0 4.497 1.343 4.497 3h1.5a2.999 2.999 0 0 1 2.998 2.998zM6 3h5.997c0-1.037-1.342-1.5-2.998-1.5-1.656 0-2.999.463-2.999 1.5zm10.495 16.496H1.502v1.5c0 .828.672 1.5 1.5 1.5h11.993a1.5 1.5 0 0 0 1.5-1.5zm0-13.498a1.5 1.5 0 0 0-1.5-1.5h-1.499v4.5h-1.499v-4.5H6v4.5H4.501v-4.5h-1.5a1.5 1.5 0 0 0-1.499 1.5v11.998h14.993z"/></svg></a></li>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="header__logo">
                <img src={logo} alt="Logo" width="64" height="56" />
                <h3 className="hide-mobile">Waxom</h3>
              </div>
              <i className="header__menu__btn fa fa-bars" onClick={this.openMenu}></i>
              <div className="header__nav hide-mobile">
                <ul className="header__nav__list">
                  <li className="nav__item"><a href="#">Home</a></li>
                  <li className="nav__item"><a href="#">About us</a></li>
                  <li className="nav__item"><a href="#">Portfolio</a></li>
                  <li className="nav__item"><a href="#">Features</a></li>
                  <li className="nav__item"><a href="#">Blog</a></li>
                  <li className="nav__item"><a href="#">Pricing</a></li>
                  <li className="nav__item"><a href="#">Shortcodes</a></li>
                  <li className="nav__item"><a href="#">Contact</a></li>
                  <li className="nav__item">
                    <div className="nav__buttons">
                        <li className="nav__item"><a href="#"><svg width="18" height="24" viewBox="0 0 18 24"><path d="M17.994 5.997v14.998a3 3 0 0 1-2.999 3H3.002a3 3 0 0 1-2.999-3V5.997A2.999 2.999 0 0 1 3.002 3H4.5c0-1.657 2.013-3 4.498-3 2.484 0 4.497 1.343 4.497 3h1.5a2.999 2.999 0 0 1 2.998 2.998zM6 3h5.997c0-1.037-1.342-1.5-2.998-1.5-1.656 0-2.999.463-2.999 1.5zm10.495 16.496H1.502v1.5c0 .828.672 1.5 1.5 1.5h11.993a1.5 1.5 0 0 0 1.5-1.5zm0-13.498a1.5 1.5 0 0 0-1.5-1.5h-1.499v4.5h-1.499v-4.5H6v4.5H4.501v-4.5h-1.5a1.5 1.5 0 0 0-1.499 1.5v11.998h14.993z"/><path fill="#fff" d="M17.994 5.997v14.998a3 3 0 0 1-2.999 3H3.002a3 3 0 0 1-2.999-3V5.997A2.999 2.999 0 0 1 3.002 3H4.5c0-1.657 2.013-3 4.498-3 2.484 0 4.497 1.343 4.497 3h1.5a2.999 2.999 0 0 1 2.998 2.998zM6 3h5.997c0-1.037-1.342-1.5-2.998-1.5-1.656 0-2.999.463-2.999 1.5zm10.495 16.496H1.502v1.5c0 .828.672 1.5 1.5 1.5h11.993a1.5 1.5 0 0 0 1.5-1.5zm0-13.498a1.5 1.5 0 0 0-1.5-1.5h-1.499v4.5h-1.499v-4.5H6v4.5H4.501v-4.5h-1.5a1.5 1.5 0 0 0-1.499 1.5v11.998h14.993z"/></svg></a></li>
                        <li className="nav__item"><a href="#"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M23.761 23.763a.785.785 0 0 1-1.098 0l-6.217-6.12a10.155 10.155 0 0 1-6.353 2.22C4.52 19.862.001 15.415.001 9.928 0 4.443 4.519-.002 10.093-.002c5.575 0 10.093 4.445 10.094 9.93 0 2.565-.997 4.897-2.618 6.658l6.193 6.095a.758.758 0 0 1 0 1.082zM18.633 9.93c0-4.641-3.823-8.404-8.54-8.404-4.716 0-8.54 3.763-8.54 8.404 0 4.643 3.824 8.405 8.54 8.405 4.717 0 8.54-3.762 8.54-8.405z"/><path fill="#fff" d="M23.761 23.763a.785.785 0 0 1-1.098 0l-6.217-6.12a10.155 10.155 0 0 1-6.353 2.22C4.52 19.862.001 15.415.001 9.928 0 4.443 4.519-.002 10.093-.002c5.575 0 10.093 4.445 10.094 9.93 0 2.565-.997 4.897-2.618 6.658l6.193 6.095a.758.758 0 0 1 0 1.082zM18.633 9.93c0-4.641-3.823-8.404-8.54-8.404-4.716 0-8.54 3.763-8.54 8.404 0 4.643 3.824 8.405 8.54 8.405 4.717 0 8.54-3.762 8.54-8.405z"/></svg></a></li>
                    </div>
                  </li>
                </ul>
              </div>
              <a href="#" className="header__nav-mobile__search"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M23.761 23.763a.785.785 0 0 1-1.098 0l-6.217-6.12a10.155 10.155 0 0 1-6.353 2.22C4.52 19.862.001 15.415.001 9.928 0 4.443 4.519-.002 10.093-.002c5.575 0 10.093 4.445 10.094 9.93 0 2.565-.997 4.897-2.618 6.658l6.193 6.095a.758.758 0 0 1 0 1.082zM18.633 9.93c0-4.641-3.823-8.404-8.54-8.404-4.716 0-8.54 3.763-8.54 8.404 0 4.643 3.824 8.405 8.54 8.405 4.717 0 8.54-3.762 8.54-8.405z"/><path fill="#fff" d="M23.761 23.763a.785.785 0 0 1-1.098 0l-6.217-6.12a10.155 10.155 0 0 1-6.353 2.22C4.52 19.862.001 15.415.001 9.928 0 4.443 4.519-.002 10.093-.002c5.575 0 10.093 4.445 10.094 9.93 0 2.565-.997 4.897-2.618 6.658l6.193 6.095a.758.758 0 0 1 0 1.082zM18.633 9.93c0-4.641-3.823-8.404-8.54-8.404-4.716 0-8.54 3.763-8.54 8.404 0 4.643 3.824 8.405 8.54 8.405 4.717 0 8.54-3.762 8.54-8.405z"/></svg></a>
            </div>
          </div>
          <SimpleSlider />
        </div>
        )
    }
}