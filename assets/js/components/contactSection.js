// contactSection.js
var React = require('react');
var linkedIn = require('../../imgs/linkedin.svg');
var github = require('../../imgs/github.svg');
var instagram = require('../../imgs/instagram.svg');
var soundcloud = require('../../imgs/soundcloud.svg');
var twitter = require('../../imgs/twitter.svg');
var email = require('../../imgs/email.svg');



var ContactSection = React.createClass({
  getInitialState: function() {
    var imgPath = '../../../css/imgs/';
    return {
      linkedIn: { img: linkedIn, url: 'www.linkdin.com'},
      github:{img: github, url: 'www.github.com'},
      instagram: {img: instagram, url: 'www.instagram.com'},
      soundcloud: {img: soundcloud, url: 'www.soundcloud.com'},
      twitter: {img: twitter, url: 'www.twitter.com'},
      email: {img: email, url: 'www.gmail.com'}
    }
  },
  render: function() {

    var contactNodes = [];
    for (var sm in this.state) {
      contactNodes.push(
        <li><a href={this.state[sm].url}>
          <img src={this.state[sm].img} alt={sm} />
        </a></li>
      )
    }
    return (
      <div className="contact">
        <ul className="social-media">
          {contactNodes}
        </ul>
      </div>
    );
  }
});

module.exports = ContactSection;