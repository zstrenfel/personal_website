// headerSection.js

import React from 'react';
import { Link, IndexLink } from 'react-router'


export default React.createClass({
  render() {
   return (
      <div className="splash">
        <div className="half-column image">
          <img src={"https://api.fnkr.net/testimg/350x200/00CED1/FFF/?text=img+placeholder"} />
        </div>
        <div className="half-column text">
          <h2>Hello, I'm </h2>
           <h1>Zach Strenfel</h1>
           <p>
              Currently a senior @ UC Berkeley studying Media Studies,
              but with a passion for <b> Front-End Web Developement bluu</b>, <b>Design</b>, and <b>UI/UX</b>.
            </p>
            <aside> Feel free to view my work <Link to="/work">here</Link>.</aside>
        </div>
      </div>
    );
  }
})