import React, { Component } from 'react';
import './Landing.css';
import Head from './component/Head';
import Services from './component/Services';


class Landing extends Component {
  
  render() {
    return (
      <div className="App">
        <Head />
        <Services />
      </div>
    );
  }
}

export default Landing;
