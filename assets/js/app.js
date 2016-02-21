import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory, Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import Contact from './components/contact'

export default React.createClass({
  getInitialState() {
    return {
      page: null
    }
  },
  componentWillMount() {
    this.setPage();
    console.log('will mount');
  },
  componentWillUpdate() {
    console.log("will update");
    return this.setPage();
  },
  setPage() {
    var page = this.props.routes[this.props.routes.length-1];
    var name = page.component.displayName;

    if (this.state.page === name) {
      return false
    } else {
      this.setState({page: name});
      return true;
    }
  },
  render() {
    // var Contact = this.state.page !== 'splash' ? <Contact /> : null;
    var page = this.props.routes[this.props.routes.length-1];
    var name = page.component.displayName;
    var Footer;
    if (name !== 'splash') {
      console.log('adding contact section');
      Footer = <Contact />
    }
    return (
      <div className="content">
        <header className="main-nav">
          <ul>
            <li><IndexLink to="/" activeClassName="menu-active">Home</IndexLink></li>
            <li><Link to="/work" activeClassName="menu-active">Work</Link></li>
          </ul>
        </header>
          {this.props.children}
          {Footer}
      </div>
    )
  }
});