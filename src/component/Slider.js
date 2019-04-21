import React, { Component } from "react";
import Slider from "react-slick";
import './style/slider.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 500,
          settings:{
            arrows: false
          }
        }
      ]
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slide">
            <h3>Unique and Modern Design</h3>
            <h1>Portfolio PSD Template</h1>
            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
            <button className="slide__btn">get started</button>
          </div>
          <div className="slide">
            <h3>Unique and Modern Design</h3>
            <h1>Portfolio PSD Template</h1>
            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
            <button className="slide__btn">get started</button>
          </div>
        </Slider>
      </div>
    );
  }
}