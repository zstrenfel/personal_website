// workSection.js
import React from 'react'
import { Link, IndexLink } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default React.createClass({
  render() {
    return (
      <div className="work">
        <header>
          <h2> Work </h2>
        </header>
          <nav className="sub-nav left">
            <ul>
              <li><Link to='/work/development'>Development</Link></li>
              <li><Link to='/work/design'>Design</Link></li>
            </ul>
          </nav>
        {this.props.children}
      </div>
    )
  }
});
