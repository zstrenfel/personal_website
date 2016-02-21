// workSection.js
import React from 'react'
import { Link, IndexLink } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default React.createClass({
  render() {
    return (
      <div className="work">
          <nav className="sub-nav left">
            <ul>
              <li><Link to='/work/development' activeClassName='gallery-active'>Development</Link></li>
              <li><Link to='/work/design' activeClassName='gallery-active'>Design</Link></li>
            </ul>
          </nav>
        {this.props.children}
      </div>
    )
  }
});
