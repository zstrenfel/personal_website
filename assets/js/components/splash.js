// headerSection.js

import React from 'react';
import Ticker from './ticker'
import { Link } from 'react-router'


export default React.createClass({
  render() {
   return (
      <div className="splash">
        <div className="half-column image-container">
          <img src={'../../imgs/splashMe.png'} />
        </div>
        <div className="half-column text rise">
          <h2>Hello, I'm </h2>
           <h1>Zach Strenfel</h1>
           <p>
              Currently a senior @ UC Berkeley studying Media Studies,
              but with a passion for <b> Front-End Web Developement</b>, <b>Design</b>, and <b>UI/UX</b>.
          </p>
          <div className="contact">
            <ul>
              <li><img src={'../../imgs/icons/linkedin-with-circle.svg'} /></li>
              <li><img src={'../../imgs/icons/github-with-circle.svg'} /></li>
              <li><img src={'../../imgs/icons/twitter-with-circle.svg'} /></li>
              <li><img src={'../../imgs/icons/closed-envelope-circle.svg'} /></li>
            </ul>
          </div>
        </div>
        <Ticker/>
      </div>
    );
  }
})