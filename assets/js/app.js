import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory, Router, Route, IndexRoute, Link, IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="content">
        <header className="main-nav">
          <ul>
            <li><Link to="/work" activeClassName="menu-active">Work</Link></li>
            <li><IndexLink to="/" activeClassName="menu-active">Home</IndexLink></li>
          </ul>
        </header>
          {this.props.children}
      </div>
    )
  }
});